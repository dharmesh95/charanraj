import { Divider, List, ListItem, ListItemText, Typography } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import { postData } from "../../../actions/action";
import { continuousCall } from "../../../constants/time.constants";
import { FETCH_GROCERY } from "../../../constants/types.constants";
import { createUrl, GET_GROCERY_URL } from "../../../constants/url.constants";
import { getHeaders } from "../../../constants/user.constants";
import { checkIfEmpty } from "../../../helpers/common.helper";
import { getLastWeekStartDate } from "../../../helpers/date.helper";
import { AvatarImg, StyledListItemAvatar, RoleTypography } from "../../common/common.styles";
import { WithSpinner } from "../../common/WithSpinner";

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
    return (
      <div style={marginStyle}>
        <List dense={true}>
          {grocery.map((obj, index) => (
            <div key={obj.id}>
              <Divider variant="fullWidth" component="li" />
              <ListItem alignItems="flex-start">
                <StyledListItemAvatar>
                  <AvatarImg
                    src={checkIfEmpty(obj.user) ? null : obj.user.imageUrl}
                    alt="img"
                  />
                </StyledListItemAvatar>
                <ListItemText
                  primary={
                    <React.Fragment>
                      <Typography>
                        {checkIfEmpty(obj.user) ? null : obj.user.name}
                      </Typography>
                      <RoleTypography>
                        {new Date(obj.date).toLocaleDateString() +
                          " " +
                          new Date(obj.date).toLocaleTimeString()}
                      </RoleTypography>
                      <Typography>{obj.itemName}</Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
            </div>
          ))}
        </List>
      </div>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithSpinner(GroceryAdmin));
