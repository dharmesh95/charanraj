import React, { Component } from "react";
import IdleTimer from "react-idle-timer";
import { connect } from "react-redux";
import { postData /* resetState */ } from "./actions/action";
import MiniDrawer from "./components/mini-drawer/MiniDrawer";
import { IDLE_TIME } from "./constants/time.constants";
import { FETCH_USER /* LOGOUT */ } from "./constants/types.constants";
import { createUrl, GET_USER_URL } from "./constants/url.constants";
import { getCurrentWeek, getLastWeek } from "./helpers/date.helper";
import { getProfileObj, removeProfileObj } from "./helpers/session.helper";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { profileObj: null };
    this.idleTimer = null;
  }

  onIdle = () => {
    console.log("user was idle for " + IDLE_TIME / (60 * 1000) + " minutes ");
    console.log("logging user out");
    this.logoutSuccess();
  };

  logoutSuccess = () => {
    const { history } = this.props;
    removeProfileObj();
    history.push("/login");
  };

  checkIfUserIsLoggedIn = () => {
    const { getUser, history } = this.props;
    let profileObj = getProfileObj();
    if (profileObj) {
      getUser(profileObj);
    } else {
      history.push("/login");
    }
  };

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
        <MiniDrawer
          isLoading={!profileObj}
          logoutSuccess={this.logoutSuccess}
          profileObj={profileObj}
          week={currentWeek}
          currentWeek={currentWeek}
          lastWeek={lastWeek}
        />
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
      dispatch(postData(createUrl(GET_USER_URL), profileObj, {}, FETCH_USER))
    // resetState: () => dispatch(resetState(LOGOUT))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
