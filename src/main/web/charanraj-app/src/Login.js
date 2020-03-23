import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";
import { getProfileObj, setProfileObj } from "./helpers/session.helper";
import GoogleIcon from "./icons/GoogleIcon";
import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.successResponseGoogle = this.successResponseGoogle.bind(this);
    this.failureResponseGoogle = this.failureResponseGoogle.bind(this);
  }

  successResponseGoogle(response) {
    if (response) {
      setProfileObj(response.profileObj);
      this.props.history.push("/home");
    }
  }

  failureResponseGoogle(response) {
    console.log(response);
  }

  checkIfUserIsLoggedIn() {
    let profileObj = getProfileObj();
    if (profileObj) {
      this.props.history.push("/home");
    }
  }
  componentDidMount() {
    this.checkIfUserIsLoggedIn();
  }

  render() {
    return (
      <div>
        <GoogleLogin
          clientId="579327787651-59gvtsh6qe4ijk1lqerhhojt862ddd4r.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.successResponseGoogle}
          onFailure={this.failureResponseGoogle}
          cookiePolicy={"single_host_origin"}
          render={renderProps => (
            <div className="col" onClick={renderProps.onClick}>
              <div className="google btn">
                <GoogleIcon className="google-icon" /> &nbsp; Login with Google
              </div>
            </div>
          )}
        />
      </div>
    );
  }
}
