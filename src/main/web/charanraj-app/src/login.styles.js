import styled, { css } from "styled-components";
import GoogleIcon from "./icons/GoogleIcon";

export const ButtonDiv = styled.div`
  width: 50%;
  margin: auto;
  margin-top: 200px;
`;

export const GoogleLoginIcon = styled(GoogleIcon)`
  height: 20px;
  vertical-align: bottom;
  fill: white;
`;

export const LoginButton = css`
  min-width: 168px;
  /* width: 50%; */
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 4px;
  margin: 5px 0;
  opacity: 0.85;
  display: inline-block;
  line-height: 20px;
  text-decoration: none;
`;

export const GoogleColor = css`
  background-color: #df4930;
  color: white;
`;

export const GoogleLoginButton = styled.div`
  ${LoginButton};
  ${GoogleColor};
`;
