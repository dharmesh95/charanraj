import { Typography } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import { postData } from "../../actions/action";
import { continuousCall } from "../../constants/time.constants";
import { FETCH_ALL_REQUESTS, FETCH_APPROVED_USERS, FETCH_FEEDBACK } from "../../constants/types.constants";
import { createUrl, DELETE_USER_URL, GET_ALL_REQUESTS_URL, GET_APPROVED_USERS_URL, GET_FEEDBACK_URL, UPDATE_USER_ROLE_URL, UPDATE_USER_URL } from "../../constants/url.constants";
import { getHeaders } from "../../constants/user.constants";
import AdminExpansionPanel from "./AdminExpansionPanel";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.updateUserRequest = this.updateUserRequest.bind(this);
    this.updateAdmin = this.updateAdmin.bind(this);
    this.updateAccess = this.updateAccess.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.state = {
      requests: [],
      approvedUsers: []
    };
  }

  updateUserRequest(userObj, role, index) {
    const { requests } = this.state;
    const { updateUserRole, profileObj } = this.props;
    userObj.role = role;
    updateUserRole(userObj, profileObj);
    delete requests[index];
    this.setState({ requests });
  }

  updateAdmin(userObj, role, index) {
    const { approvedUsers } = this.state;
    const { updateUserRole, profileObj } = this.props;
    userObj.role = role;
    updateUserRole(userObj, profileObj);
    approvedUsers[index] = userObj;
    this.setState({ approvedUsers });
  }

  updateAccess(userObj, type, index) {
    const { approvedUsers } = this.state;
    const { updateUser, profileObj } = this.props;
    userObj.access[type] = !userObj.access[type];
    updateUser(userObj, profileObj);
    approvedUsers[index] = userObj;
    this.setState({ approvedUsers });
  }

  deleteUser(userObj, index) {
    const { approvedUsers } = this.state;
    const { deleteUser, profileObj } = this.props;
    deleteUser(userObj, profileObj);
    delete approvedUsers[index];
    this.setState({ approvedUsers });
  }

  fetchAllAdminData(props) {
    const {
      fetchRequests,
      fetchApprovedUsers,
      fetchFeedback,
      profileObj
    } = props;
    fetchRequests(profileObj);
    fetchApprovedUsers(profileObj);
    fetchFeedback(profileObj);
  }

  componentDidMount() {
    this.adminInterval = continuousCall(this.fetchAllAdminData, this.props);
  }

  componentDidUpdate(prevProps) {
    const { requests, approvedUsers } = this.props;
    if (requests !== prevProps.requests) {
      this.setState({ requests });
    }
    if (approvedUsers !== prevProps.approvedUsers) {
      this.setState({ approvedUsers });
    }
  }

  render() {
    const { requests, approvedUsers } = this.state;
    return (
      <div>
        <Typography paragraph>Admin</Typography>
        <AdminExpansionPanel
          {...this.props}
          requests={requests}
          approvedUsers={approvedUsers}
          updateUserRequest={this.updateUserRequest}
          updateAdmin={this.updateAdmin}
          updateAccess={this.updateAccess}
          deleteUser={this.deleteUser}
        />
      </div>
    );
  }

  componentWillUnmount() {
    clearInterval(this.adminInterval);
  }
}

Admin.propTypes = {};

function mapStateToProps(state, ownProps) {
  return {
    requests: state.adminReducer.requests,
    feedback: state.adminReducer.feedback,
    approvedUsers: state.adminReducer.approvedUsers
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchRequests: profileObj =>
      dispatch(
        postData(
          createUrl(GET_ALL_REQUESTS_URL),
          profileObj,
          getHeaders(profileObj),
          FETCH_ALL_REQUESTS
        )
      ),
    fetchFeedback: profileObj =>
      dispatch(
        postData(
          createUrl(GET_FEEDBACK_URL),
          profileObj,
          getHeaders(profileObj),
          FETCH_FEEDBACK
        )
      ),
    updateUserRole: (user, profileObj) =>
      dispatch(
        postData(createUrl(UPDATE_USER_ROLE_URL), user, getHeaders(profileObj))
      ),
    updateUser: (user, profileObj) =>
      dispatch(
        postData(createUrl(UPDATE_USER_URL), user, getHeaders(profileObj))
      ),
    fetchApprovedUsers: profileObj =>
      dispatch(
        postData(
          createUrl(GET_APPROVED_USERS_URL),
          profileObj,
          getHeaders(profileObj),
          FETCH_APPROVED_USERS
        )
      ),
    deleteUser: (user, profileObj) =>
      dispatch(
        postData(createUrl(DELETE_USER_URL), user, getHeaders(profileObj))
      )
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
