import React from "react";
import { ROLES, UNKNOWN_MESSAGE } from "../../constants/user.constants";
import { PermissionDeniedHeaderTypography } from "../food/food.styles";

export default function PermissionDenied(props) {
  const { profileObj } = props;

  return (
    <PermissionDeniedHeaderTypography
      variant="caption"
    >
      {profileObj && ROLES[profileObj.role]
        ? ROLES[profileObj.role].message
        : UNKNOWN_MESSAGE}
    </PermissionDeniedHeaderTypography>
  );
}
