import Typography from "@material-ui/core/Typography";
import React from "react";
import { ROLES, UNKNOWN_MESSAGE } from "../../constants/user.constants";
import "../food/food.css";

export default function PermissionDenied(props) {
  const { profileObj } = props;

  return (
    <Typography
      variant="caption"
      className="details-header permission-denied"
    >
      {ROLES[profileObj.role]
        ? ROLES[profileObj.role].message
        : UNKNOWN_MESSAGE}
    </Typography>
  );
}
