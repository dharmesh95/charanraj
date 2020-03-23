import { Typography } from "@material-ui/core";
import React, { Component } from "react";
import CheckIcon from "../../../../icons/CheckIcon";
import TimesIcon from "../../../../icons/TimesIcon";
import IntegrationAutosuggest from "../auto-suggest/IntegrationAutosuggest";
import "./../../../cleaning/cleaning.css";

export default class EditableUserInput extends Component {
  constructor(props) {
    super(props);
    this.name = props.user.name;
    this.state = { editUserName: false };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.save = this.save.bind(this);
  }

  save(cleaningObj, userName) {
    this.name = this.props.value;
    this.props.save(cleaningObj, userName);
  }

  toggleEdit() {
    this.setState({ ...this.state, editUserName: !this.state.editUserName });
  }

  render() {
    const { cleaningObj, suggestions, userName, placeholder, updateUser } = this.props;
    const { editUserName } = this.state;
    return (
      <div>
        {!editUserName && (
          <Typography onClick={() => this.toggleEdit()}>{this.name}</Typography>
        )}
        {editUserName && (
          <div>
            <IntegrationAutosuggest
              suggestions={suggestions}
              placeholder={placeholder}
              updateUser={updateUser}
              userName={userName}
            />
            <span
              onClick={() => {
                this.save(cleaningObj, userName);
                this.toggleEdit();
              }}
            >
              <CheckIcon className="check-logo" />
            </span>
            <span onClick={() => this.toggleEdit()}>
              <TimesIcon className="times-logo" />
            </span>
          </div>
        )}
      </div>
    );
  }
}
