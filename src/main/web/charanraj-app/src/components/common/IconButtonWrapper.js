import React from "react";
import { IconButton } from "@material-ui/core";

export const ContactIconButton = props => {
  return (
    <IconButton target="_blank" href={props.link}>
      {props.children}
    </IconButton>
  );
};
