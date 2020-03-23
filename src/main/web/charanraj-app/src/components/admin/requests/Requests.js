import { Divider, ListItem, ListItemAvatar } from "@material-ui/core";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React, { Component } from "react";
import { NORMAL_USER, REJECTED_USER } from "../../../constants/user.constants";
import { checkIfEmpty } from "../../../helpers/common.helper";
import CheckIcon from "../../../icons/CheckIcon";
import TimesIcon from "../../../icons/TimesIcon";
import "./../../common/common.css";
import "./requests.css";

export default class Requests extends Component {
  render() {
    const { classes, requests, updateUserRequest } = this.props;
    return (
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Requests</Typography>
        </ExpansionPanelSummary>
        {!checkIfEmpty(requests) ? (
          <div>
            <List dense={true}>
              {requests.map((request, index) => (
                <div key={request.id}>
                  <Divider variant="fullWidth" component="li" />
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar className="list-item-avatar">
                      <img
                        className="avatar-img"
                        src={request.imageUrl}
                        alt="img"
                      ></img>
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <React.Fragment>
                          <Typography>{request.name}</Typography>
                          <IconButton
                            className="request-icons"
                            onClick={() =>
                              updateUserRequest(request, NORMAL_USER, index)
                            }
                          >
                            <CheckIcon className="check-logo" />
                          </IconButton>
                          <IconButton
                            className="request-icons"
                            onClick={() =>
                              updateUserRequest(request, REJECTED_USER, index)
                            }
                          >
                            <TimesIcon className="times-logo" />
                          </IconButton>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                </div>
              ))}
            </List>
          </div>
        ) : (
          <div className="no-req">No new requests</div>
        )}
      </ExpansionPanel>
    );
  }
}