import { Button, Paper, TextField, Typography } from "@material-ui/core";
import { Component, default as React } from "react";
import { connect } from "react-redux";
import { postData } from "../../actions/action";
import { ADD_GROCERY_URL, createUrl } from "../../constants/url.constants";
import { ACCESS_GROCERY_KEY, getHeaders } from "../../constants/user.constants";
import { isAccessible } from "../../helpers/visibility.helper";
import PaperPlaneIcon from "../../icons/PaperPlaneIcon";
import GroceryModel from "../../models/GroceryModel";
import GroceryAdmin from "../admin/grocery/GroceryAdmin";
import PermissionDenied from "../common/PermissionDenied";
import "./grocery.css";

class Grocery extends Component {
  constructor(props) {
    super(props);
    this.state = { grocery: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange($event) {
    this.setState({ grocery: $event.target.value });
  }

  sendGrocery = () => {
    const { grocery } = this.state;
    const { profileObj, sendGrocery } = this.props;
    if (grocery && grocery.length > 2) {
      let groceryObj = new GroceryModel(profileObj, grocery, new Date(), profileObj.houseId);
      sendGrocery(groceryObj, profileObj);
      this.setState({ grocery: "" });
    }
  };
  render() {
    const { profileObj } = this.props;
    const { grocery } = this.state;

    return isAccessible(profileObj, ACCESS_GROCERY_KEY) ? (
      <div>
        <Typography paragraph>Grocery</Typography>
        <Paper>
          <div className="send-grocery">
            <TextField
              id="standard-multiline-static"
              label="Item Name"
              multiline
              rows="6"
              placeholder="Add something to the Grocery List"
              className="grocery-text-field"
              margin="normal"
              onChange={this.handleChange}
              value={grocery}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={this.sendGrocery}
            >
              Send
              <PaperPlaneIcon className="send-icon" />
            </Button>
          </div>
        </Paper>
        <Paper>
          <div className="grocery-list-header">
            <Typography paragraph>Grocery List</Typography>
          </div>
          <GroceryAdmin {...this.props} />
        </Paper>
      </div>
    ) : (
      <PermissionDenied profileObj={profileObj} />
    );
  }
}

Grocery.propTypes = {};

function mapStateToProps(state, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    sendGrocery: (groceryObj, profileObj) =>
      dispatch(
        postData(createUrl(ADD_GROCERY_URL), groceryObj, getHeaders(profileObj))
      )
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Grocery);
