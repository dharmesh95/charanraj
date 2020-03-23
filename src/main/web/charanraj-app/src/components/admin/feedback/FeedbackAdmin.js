import { Divider, ListItem, ListItemAvatar } from "@material-ui/core";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React, { Component } from "react";
import { checkIfEmpty } from "../../../helpers/common.helper";
import CircularIndeterminate from "../../common/CircularIndeterminate";
import "./../../feedback/feedback.css";
import './../../common/common.css'
import { isMaster } from "../../../helpers/visibility.helper";

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
        {!checkIfEmpty(feedback) && isMaster(profileObj) ? (
          <div>
            <List dense={true}>
              {feedback.map((obj, index) => (
                <div key={obj.id}>
                  <Divider variant="fullWidth" component="li" />
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar className="list-item-avatar">
                      <img
                        className="avatar-img"
                        src={checkIfEmpty(obj.user) ? null : obj.user.imageUrl}
                        alt="img"
                      ></img>
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <React.Fragment>
                          <Typography>
                            {checkIfEmpty(obj.user) ? null : obj.user.name}
                          </Typography>
                          <Typography className="role">
                            {new Date(obj.date).toLocaleDateString() +
                              " " +
                              new Date(obj.date).toLocaleTimeString()}
                          </Typography>
                          <Typography>{obj.feedback}</Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                </div>
              ))}
            </List>
          </div>
        ) : (
          <CircularIndeterminate />
        )}
      </ExpansionPanel>
    );
  }
}
