import { ExpansionPanel, ExpansionPanelSummary, Typography } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React, { Component } from "react";
import { checkIfEmpty } from "../../../helpers/common.helper";
import UserList from "./UserList";

export default class Users extends Component {
  render() {
    const {
      classes,
      approvedUsers,
      deleteUser,
      updateAccess,
      updateAdmin,
      profileObj
    } = this.props;

    const userListProps = {
      approvedUsers,
      updateAccess,
      profileObj,
      updateAdmin,
      deleteUser,
      classes
    };
    return (
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Users</Typography>
        </ExpansionPanelSummary>
        <UserList isLoading={checkIfEmpty(approvedUsers)} {...userListProps} />
      </ExpansionPanel>
    );
  }
}
