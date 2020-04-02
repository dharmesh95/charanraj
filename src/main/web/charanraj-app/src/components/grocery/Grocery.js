import { Button, Paper, Typography } from "@material-ui/core";
import { Component, default as React } from "react";
import { connect } from "react-redux";
import { postData } from "../../actions/action";
import { ADD_GROCERY_URL, createUrl } from "../../constants/url.constants";
import { ACCESS_GROCERY_KEY, getHeaders } from "../../constants/user.constants";
import { checkIfEmpty } from "../../helpers/common.helper";
import { isAccessible } from "../../helpers/visibility.helper";
import PaperPlaneIcon from "../../icons/PaperPlaneIcon";
import GroceryModel from "../../models/GroceryModel";
import GroceryAdmin from "../admin/grocery/GroceryAdmin";
import { StyledTextFied } from "../common/common.styles";
import PermissionDenied from "../common/PermissionDenied";
import { GroceryHeaderTypography, SendGroceryDiv } from "./grocery.styles";

class Grocery extends Component {
  constructor(props) {
    super(props);
    this.state = { grocery: "" };
  }

  handleChange = $event => {
    this.setState({ grocery: $event.target.value });
  };

  sendGrocery = () => {
    const { grocery } = this.state;
    const { profileObj, sendGrocery } = this.props;
    if (grocery && grocery.length > 2) {
      let groceryObj = new GroceryModel(
        profileObj,
        grocery,
        new Date(),
        profileObj.houseId
      );
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
          <SendGroceryDiv>
            <StyledTextFied
              id="standard-multiline-static"
              label="Item Name"
              multiline
              rows="6"
              placeholder="Add something to the Grocery List"
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
              <PaperPlaneIcon />
            </Button>
          </SendGroceryDiv>
        </Paper>
        <Paper>
          <GroceryHeaderTypography paragraph>
            Grocery List
          </GroceryHeaderTypography>
          <GroceryAdmin isLoading={checkIfEmpty(grocery)} {...this.props} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Grocery);
