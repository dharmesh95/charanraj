import { Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@material-ui/core";
import React, { Component } from "react";
import { USER_NAME_MAPPING } from "../../../../constants/user.constants";
import { checkIfEmpty } from "../../../../helpers/common.helper";
import { findUserByName } from "../../../../helpers/user.helper";
import "./../../../cleaning/cleaning.css";
import "./../../../common/common.css";
import EditableUserInput from "./EditableUserInput";
import "./list.css";

export default class EditableList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName1: "",
      userName2: ""
    };
    this.updateUser = this.updateUser.bind(this);
    this.save = this.save.bind(this);
  }

  updateUser(userName, value) {
    this.setState({ ...this.state, [userName]: value });
  }

  save(cleaningObj, key) {
    const { approvedUsers, updateSchedule, profileObj } = this.props;
    const userName = this.state[key];
    const updatedUser = findUserByName(approvedUsers, userName);
    cleaningObj[USER_NAME_MAPPING[key]] = updatedUser;
    updateSchedule(cleaningObj, profileObj);
  }

  render() {
    const { userName1, userName2 } = this.state;
    const { header, approvedUsers, placeholder, generatedList } = this.props;
    return (
      !checkIfEmpty(generatedList) && (
        <div>
          {header && <Typography className="header">{header}</Typography>}
          <List dense={true}>
            {generatedList.map(cleaningObj => {
              return (
                <div key={cleaningObj.id}>
                  <Divider variant="fullWidth" component="li" />
                  <ListItem
                    className={cleaningObj.className}
                    alignItems="flex-start"
                  >
                    <ListItemAvatar className="list-item-avatar">
                      <span>
                        {new Date(cleaningObj.date).toLocaleDateString()}
                      </span>
                    </ListItemAvatar>
                    <ListItemText
                      className="list-item-text"
                      primary={
                        <React.Fragment>
                          <EditableUserInput
                            cleaningObj={cleaningObj}
                            user={cleaningObj.user1}
                            suggestions={approvedUsers}
                            placeholder={placeholder}
                            updateUser={this.updateUser}
                            userName="userName1"
                            value={userName1}
                            save={this.save}
                          />
                          <EditableUserInput
                            cleaningObj={cleaningObj}
                            user={cleaningObj.user2}
                            suggestions={approvedUsers}
                            placeholder={placeholder}
                            updateUser={this.updateUser}
                            userName="userName2"
                            value={userName2}
                            save={this.save}
                          />
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                </div>
              );
            })}
          </List>
        </div>
      )
    );
  }
}
