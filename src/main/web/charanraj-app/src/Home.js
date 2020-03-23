import React, { Component } from "react";
import IdleTimer from "react-idle-timer";
import { connect } from "react-redux";
import { postData, resetState } from "./actions/action";
import CircularIndeterminate from "./components/common/CircularIndeterminate";
import { IDLE_TIME } from "./constants/time.constants";
import { FETCH_USER, LOGOUT } from "./constants/types.constants";
import { createUrl, GET_USER_URL } from "./constants/url.constants";
import { getCurrentWeek, getLastWeek } from "./helpers/date.helper";
import { getProfileObj, removeProfileObj } from "./helpers/session.helper";
import MiniDrawer from "./MiniDrawer";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { profileObj: null };
    this.idleTimer = null;
    this.logoutSuccess = this.logoutSuccess.bind(this);
    this.onIdle = this.onIdle.bind(this);
  }

  onIdle() {
    console.log("user was idle for " + IDLE_TIME / (60 * 1000) + " minutes ");
    console.log("logging user out");
    this.logoutSuccess();
  }

  logoutSuccess() {
    removeProfileObj();
    this.props.history.push("/login");
  }

  checkIfUserIsLoggedIn() {
    let profileObj = getProfileObj();
    if (profileObj) {
      this.props.getUser(profileObj);
    } else {
      this.props.history.push("/login");
    }
  }

  componentDidMount() {
    this.checkIfUserIsLoggedIn();
  }

  componentDidUpdate(prevProps) {
    const { profileObjWithRole } = this.props;
    if (profileObjWithRole !== prevProps.profileObjWithRole) {
      this.setState({ profileObj: profileObjWithRole });
    }
  }

  render() {
    const { profileObj } = this.state;
    const lastWeek = getLastWeek();
    const currentWeek = getCurrentWeek();
    return (
      <div>
        <IdleTimer
          ref={ref => {
            this.idleTimer = ref;
          }}
          element={document}
          onIdle={this.onIdle}
          debounce={250}
          timeout={IDLE_TIME}
        />
        {profileObj ? (
          <MiniDrawer
            logoutSuccess={this.logoutSuccess}
            profileObj={profileObj}
            week={currentWeek}
            currentWeek={currentWeek}
            lastWeek={lastWeek}
            {...this.props}
          />
        ) : (
          <CircularIndeterminate />
        )}
      </div>
    );
  }
}

Home.propTypes = {};

function mapStateToProps(state, ownProps) {
  return {
    profileObjWithRole: state.userReducer.profileObj
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUser: profileObj =>
      dispatch(postData(createUrl(GET_USER_URL), profileObj, {}, FETCH_USER)),
    resetState: () => dispatch(resetState(LOGOUT))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
