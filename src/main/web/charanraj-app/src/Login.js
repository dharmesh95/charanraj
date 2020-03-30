import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";
import { getProfileObj, setProfileObj } from "./helpers/session.helper";
import { ButtonDiv, GoogleLoginIcon, GoogleLoginButton } from "./login.styles";

export default class Login extends Component {
  successResponseGoogle = response => {
    if (response) {
      setProfileObj(response.profileObj);
      this.props.history.push("/home");
    }
  };

  failureResponseGoogle = response => {
    console.log(response);
  };

  checkIfUserIsLoggedIn = () => {
    let profileObj = getProfileObj();
    if (profileObj) {
      this.props.history.push("/home");
    }
  };
  componentDidMount() {
    this.checkIfUserIsLoggedIn();
  }

  render() {
    return (
      <GoogleLogin
        clientId="579327787651-59gvtsh6qe4ijk1lqerhhojt862ddd4r.apps.googleusercontent.com"
        onSuccess={this.successResponseGoogle}
        onFailure={this.failureResponseGoogle}
        cookiePolicy={"single_host_origin"}
        render={renderProps => (
          <ButtonDiv onClick={renderProps.onClick}>
            <GoogleLoginButton>
              <GoogleLoginIcon /> &nbsp; Login with Google
            </GoogleLoginButton>
          </ButtonDiv>
        )}
      />
    );
  }
}
