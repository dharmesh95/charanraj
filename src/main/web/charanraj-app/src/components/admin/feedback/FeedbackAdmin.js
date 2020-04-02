import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React, { Component } from "react";
import { checkIfEmpty } from "../../../helpers/common.helper";
import { isMaster } from "../../../helpers/visibility.helper";
import FeedbackList from "./FeedbackList";

export default class FeedbackAdmin extends Component {
  render() {
    const { classes, feedback, profileObj } = this.props;
    return (
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Feedback</Typography>
        </ExpansionPanelSummary>
        <FeedbackList
          isLoading={checkIfEmpty(feedback) || !isMaster(profileObj)}
          feedback={feedback}
        />
      </ExpansionPanel>
    );
  }
}
