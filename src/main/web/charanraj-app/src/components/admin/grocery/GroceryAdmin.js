import { Divider, ListItem, ListItemAvatar } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import React, { Component } from "react";
import { connect } from "react-redux";
import { postData } from "../../../actions/action";
import { continuousCall } from "../../../constants/time.constants";
import { FETCH_GROCERY } from "../../../constants/types.constants";
import { createUrl, GET_GROCERY_URL } from "../../../constants/url.constants";
import { getHeaders } from "../../../constants/user.constants";
import { checkIfEmpty } from "../../../helpers/common.helper";
import { getLastWeekStartDate } from "../../../helpers/date.helper";
import CircularIndeterminate from "../../common/CircularIndeterminate";
import "./../../common/common.css";
import "./../../grocery/grocery.css";

class GroceryAdmin extends Component {
  fetchGroceryData(props) {
    const { fetchGrocery, profileObj } = props;
    fetchGrocery(getLastWeekStartDate(), profileObj);
  }

  componentDidMount() {
    clearInterval(this.groceryInterval);
    this.groceryInterval = continuousCall(this.fetchGroceryData, this.props);
  }

  render() {
    const { grocery, marginStyle } = this.props;
    return !checkIfEmpty(grocery) ? (
      <div style={marginStyle}>
        <List dense={true}>
          {grocery.map((obj, index) => (
            <div key={obj.id}>
              <Divider variant="fullWidth" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar className="list-item-avatar">
                  <img
                    className="avatar-img"
                    src={checkIfEmpty(obj.user) ? null : obj.user.imageUrl}
                    alt="img"
                  ></img>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <React.Fragment>
                      <Typography>
                        {checkIfEmpty(obj.user) ? null : obj.user.name}
                      </Typography>
                      <Typography className="role">
                        {new Date(obj.date).toLocaleDateString() +
                          " " +
                          new Date(obj.date).toLocaleTimeString()}
                      </Typography>
                      <Typography>{obj.itemName}</Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
            </div>
          ))}
        </List>
      </div>
    ) : (
      <CircularIndeterminate />
    );
  }

  componentWillUnmount() {
    clearInterval(this.groceryInterval);
  }
}

GroceryAdmin.propTypes = {};

function mapStateToProps(state, ownProps) {
  return {
    grocery: state.adminReducer.grocery
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchGrocery: (date, profileObj) =>
      dispatch(
        postData(
          createUrl(GET_GROCERY_URL),
          { date: date, houseId: profileObj.houseId },
          getHeaders(profileObj),
          FETCH_GROCERY
        )
      )
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GroceryAdmin);
