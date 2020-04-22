import { Button } from "@material-ui/core";
import React from "react";
import PaperPlaneIcon from "../../../icons/PaperPlaneIcon";

export const GroceryButton = ({ onClick }) => {
  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      Send
      <PaperPlaneIcon />
    </Button>
  );
};
