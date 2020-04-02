import { Typography } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import { postData } from "../../actions/action";
import { FETCH_APPROVED_USERS, FETCH_CLEANING_SCHEDULE_FOR_USER, FETCH_FULL_CLEANING_SCHEDULE } from "../../constants/types.constants";
import { createUrl, GET_APPROVED_USERS_URL, GET_FULL_SCHEDULE_URL, GET_SCHEDULE_BY_USER_ID_URL, SEND_EVENT_INVITES_URL, UPDATE_SCHEDULE_URL } from "../../constants/url.constants";
import { ACCESS_CLEANING_KEY, getHeaders } from "../../constants/user.constants";
import { isAccessible } from "../../helpers/visibility.helper";
import EditableList from "../admin/cleaning/list/EditableList";
import UserCleaningList from "../admin/cleaning/list/UserCleaningList";
import PermissionDenied from "../common/PermissionDenied";
import SimpleExpansionPanel from "../food/SimpleExpansionPanel";

class Cleaning extends Component {
  componentDidMount() {
    const {
      profileObj,
      fetchSchedule,
      fetchFullSchedule,
      fetchApprovedUsers
    } = this.props;
    fetchSchedule(profileObj);
    fetchFullSchedule(profileObj);
    fetchApprovedUsers(profileObj);
  }

  render() {
    const {
      profileObj,
      userCleaningSchedule,
      fullCleaningSchedule,
      approvedUsers
    } = this.props;
    return isAccessible(profileObj, ACCESS_CLEANING_KEY) ? (
      <div>
        <Typography paragraph>Cleaning</Typography>
        <SimpleExpansionPanel {...this.props}>
          <UserCleaningList
            isStyled={true}
            panelHeader="Your Schedule"
            generatedList={userCleaningSchedule}
            {...this.props}
          />
          <EditableList
            approvedUsers={approvedUsers}
            panelHeader="Full Schedule"
            generatedList={fullCleaningSchedule}
            isEditable={true}
            placeholder="Search a User"
          />
        </SimpleExpansionPanel>
      </div>
    ) : (
      <PermissionDenied profileObj={profileObj} />
    );
  }
}

Cleaning.propTypes = {};

function mapStateToProps(state, ownProps) {
  return {
    approvedUsers: state.adminReducer.approvedUsers,
    userCleaningSchedule: state.cleaningReducer.userCleaningSchedule,
    fullCleaningSchedule: state.cleaningReducer.fullCleaningSchedule
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchApprovedUsers: profileObj =>
      dispatch(
        postData(
          createUrl(GET_APPROVED_USERS_URL),
          profileObj,
          getHeaders(profileObj),
          FETCH_APPROVED_USERS
        )
      ),
    fetchSchedule: profileObj =>
      dispatch(
        postData(
          createUrl(GET_SCHEDULE_BY_USER_ID_URL),
          profileObj,
          getHeaders(profileObj),
          FETCH_CLEANING_SCHEDULE_FOR_USER
        )
      ),
    fetchFullSchedule: profileObj =>
      dispatch(
        postData(
          createUrl(GET_FULL_SCHEDULE_URL),
          profileObj,
          getHeaders(profileObj),
          FETCH_FULL_CLEANING_SCHEDULE
        )
      ),
    updateSchedule: (cleaningObj, profileObj) =>
      dispatch(
        postData(
          createUrl(UPDATE_SCHEDULE_URL),
          cleaningObj,
          getHeaders(profileObj)
        )
      ),
    sendEventInvites: profileObj =>
      dispatch(
        postData(
          createUrl(SEND_EVENT_INVITES_URL),
          { email: profileObj.email },
          getHeaders(profileObj)
        )
      )
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cleaning);
