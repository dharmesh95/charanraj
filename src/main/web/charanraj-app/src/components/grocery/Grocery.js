import { Component, default as React } from "react";
import { connect } from "react-redux";
import { postData } from "../../actions/action";
import { continuousCall } from "../../constants/time.constants";
import { FETCH_GROCERY } from "../../constants/types.constants";
import { createUrl, GET_GROCERY_URL, GROCERY_URL } from "../../constants/url.constants";
import { ACCESS_GROCERY_KEY, getHeaders } from "../../constants/user.constants";
import GroceryDTO from "../../dto/GroceryDTO";
import { getLastWeekStartDate } from "../../helpers/date.helper";
import { isAccessible } from "../../helpers/visibility.helper";
import GroceryItem from "../../models/GroceryItem";
import PermissionDenied from "../common/PermissionDenied";
import GroceryInput from "./input/GroceryInput";
import GroceryListContainer from "./list/GroceryListContainer";

class Grocery extends Component {
  lastWeekDate = getLastWeekStartDate();

  constructor(props) {
    super(props);
    this.state = { grocery: "" };
  }

  handleChange = ($event) => {
    this.setState({ grocery: $event.target.value });
  };

  sendGrocery = () => {
    const { grocery } = this.state;
    const { profileObj, sendGrocery } = this.props;
    if (grocery && grocery.length > 2) {
      const groceryItem = new GroceryItem(profileObj, grocery, new Date());
      const groceryDTO = new GroceryDTO(groceryItem, this.lastWeekDate);
      sendGrocery(groceryDTO, profileObj);
      this.setState({ grocery: "" });
    }
  };

  fetchGroceryData = (props) => {
    const { fetchGrocery, profileObj } = props;
    const groceryItem = new GroceryItem(profileObj, null, null);
    const groceryDTO = new GroceryDTO(groceryItem, this.lastWeekDate);
    fetchGrocery(groceryDTO, profileObj);
  };

  componentDidMount() {
    clearInterval(this.groceryInterval);
    this.groceryInterval = continuousCall(this.fetchGroceryData, this.props);
  }

  render() {
    const { handleChange, sendGrocery } = this;
    const { profileObj } = this.props;
    const { grocery } = this.state;
    const groceryInputProps = { grocery, handleChange, sendGrocery };

    return isAccessible(profileObj, ACCESS_GROCERY_KEY) ? (
      <div>
        <GroceryInput {...groceryInputProps} />
        <GroceryListContainer />
      </div>
    ) : (
      <PermissionDenied profileObj={profileObj} />
    );
  }

  componentWillUnmount() {
    clearInterval(this.groceryInterval);
  }
}

function mapDispatchToProps(dispatch) {
  return {
    sendGrocery: (groceryDTO, profileObj) =>
      dispatch(
        postData(
          createUrl(GROCERY_URL),
          groceryDTO,
          getHeaders(profileObj),
          FETCH_GROCERY
        )
      ),
    fetchGrocery: (groceryDTO, profileObj) =>
      dispatch(
        postData(
          createUrl(GET_GROCERY_URL),
          groceryDTO,
          getHeaders(profileObj),
          FETCH_GROCERY
        )
      ),
  };
}

export default connect(null, mapDispatchToProps)(Grocery);
