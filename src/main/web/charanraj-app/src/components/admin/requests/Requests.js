import { Divider, ListItem } from "@material-ui/core";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React, { Component } from "react";
import { NORMAL_USER, REJECTED_USER } from "../../../constants/user.constants";
import { checkIfEmpty } from "../../../helpers/common.helper";
import CheckIcon from "../../../icons/CheckIcon";
import { RequestIconButton } from "../../../icons/icons.styles";
import TimesIcon from "../../../icons/TimesIcon";
import { AvatarImg, StyledListItemAvatar } from "../../common/common.styles";
import { NoRequestDiv } from "./request.styles";

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
                    <StyledListItemAvatar>
                      <AvatarImg src={request.imageUrl} alt="img" />
                    </StyledListItemAvatar>
                    <ListItemText
                      primary={
                        <React.Fragment>
                          <Typography>{request.name}</Typography>
                          <RequestIconButton
                            onClick={() =>
                              updateUserRequest(request, NORMAL_USER, index)
                            }
                          >
                            <CheckIcon />
                          </RequestIconButton>
                          <RequestIconButton
                            onClick={() =>
                              updateUserRequest(request, REJECTED_USER, index)
                            }
                          >
                            <TimesIcon className="times-logo" />
                          </RequestIconButton>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                </div>
              ))}
            </List>
          </div>
        ) : (
          <NoRequestDiv>No new requests</NoRequestDiv>
        )}
      </ExpansionPanel>
    );
  }
}
