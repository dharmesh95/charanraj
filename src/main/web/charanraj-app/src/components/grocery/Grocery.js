import { Typography } from "@material-ui/core";
import { Component, default as React } from "react";
import { connect } from "react-redux";
import { postData } from "../../actions/action";
import { continuousCall } from "../../constants/time.constants";
import { FETCH_GROCERY } from "../../constants/types.constants";
import { createUrl, GET_GROCERY_URL } from "../../constants/url.constants";
import { ACCESS_GROCERY_KEY, getHeaders } from "../../constants/user.constants";
import { getLastWeekStartDate } from "../../helpers/date.helper";
import { isAccessible } from "../../helpers/visibility.helper";
import PermissionDenied from "../common/PermissionDenied";
import { GroceryInput } from "./input/GroceryInput";
import GroceryListContainer from "./list/GroceryListContainer";

class Grocery extends Component {
  lastWeekStartDate = getLastWeekStartDate();

  fetchGroceryData = () => {
    const { profileObj, fetchGrocery } = this.props;
    fetchGrocery(this.lastWeekStartDate, profileObj);
  };

  componentDidMount() {
    clearInterval(this.groceryInterval);
    this.groceryInterval = continuousCall(this.fetchGroceryData, this.props);
  }

  render() {
    const { profileObj } = this.props;

    return isAccessible(profileObj, ACCESS_GROCERY_KEY) ? (
      <div>
        <Typography paragraph>Grocery</Typography>
        <GroceryInput fetchGroceryData={this.fetchGroceryData} />
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
    fetchGrocery: (lastWeekStartDate, profileObj) =>
      dispatch(
        postData(
          createUrl(GET_GROCERY_URL),
          { lastWeekStartDate, houseId: profileObj.houseId },
          getHeaders(profileObj),
          FETCH_GROCERY
        )
      ),
  };
}

export default connect(null, mapDispatchToProps)(Grocery);
