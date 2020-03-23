import { Button, ExpansionPanel, ExpansionPanelSummary, Typography } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getData, postData } from "../../../actions/action";
import { DEFAULT } from "../../../constants/types.constants";
import { createUrl, DELETE_CLEANING_SCHEDULE_URL, SAVE_CLEANING_SCHEDULE_URL } from "../../../constants/url.constants";
import { getHeaders } from "../../../constants/user.constants";
import { getFirstDayofTheMonth, getLastDayofTheMonth } from "../../../helpers/date.helper";
import { findUserByName } from "../../../helpers/user.helper";
import TrashIcon from "../../../icons/TrashIcon";
import "./../../cleaning/cleaning.css";
import IntegrationAutosuggest from "./auto-suggest/IntegrationAutosuggest";
import CleaningList from "./list/CleaningList";

class CleaningAdmin extends Component {
  INITIAL_STATE = {
    list: [],
    userName1: "",
    userName2: "",
    firstDate: getFirstDayofTheMonth(),
    lastDate: getLastDayofTheMonth()
  };

  constructor(props) {
    super(props);
    this.state = this.INITIAL_STATE;
    this.updateUser = this.updateUser.bind(this);
    this.updateDate = this.updateDate.bind(this);
    this.reset = this.reset.bind(this);
  }

  reset() {
    this.setState(this.INITIAL_STATE);
  }

  addToList() {
    const { userName1, userName2 } = this.state;
    let { list } = this.state;
    const { approvedUsers } = this.props;
    if (userName1) {
      const user1 = findUserByName(approvedUsers, userName1);
      const user2 = findUserByName(approvedUsers, userName2);
      list.push({ user1, user2 });
      this.setState({ ...this.state, list });
    }
  }

  updateUser(userName, value) {
    this.setState({ ...this.state, [userName]: value });
  }

  updateDate(date, value) {
    this.setState({ ...this.state, [date]: value });
  }

  render() {
    const { list, userName1, userName2, firstDate, lastDate } = this.state;
    const { approvedUsers, classes, deleteSchedule, profileObj } = this.props;
    return (
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Cleaning</Typography>
        </ExpansionPanelSummary>
        <div className="cleaning-admin-comp">
          <Button
            onClick={() => deleteSchedule(profileObj)}
            variant="contained"
            color="primary"
          >
            Delete
            <TrashIcon className="delete-icon" />
          </Button>
          <IntegrationAutosuggest
            suggestions={approvedUsers}
            label="User 1"
            placeholder="Search a User"
            updateUser={this.updateUser}
            userName="userName1"
          />
          <IntegrationAutosuggest
            suggestions={approvedUsers}
            label="User 2"
            placeholder="Search a User"
            updateUser={this.updateUser}
            userName="userName2"
          />
          <Fab
            className="add-icon"
            size="small"
            color="primary"
            aria-label="add"
          >
            <AddIcon onClick={() => this.addToList()} />
          </Fab>
          <CleaningList
            reset={this.reset}
            list={list}
            firstDate={firstDate}
            lastDate={lastDate}
            updateDate={this.updateDate}
            userName1={userName1}
            userName2={userName2}
            {...this.props}
          />
        </div>
      </ExpansionPanel>
    );
  }
}

CleaningAdmin.propTypes = {};

function mapStateToProps(state, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    saveCleaningSchedule: (schedule, profileObj) =>
      dispatch(
        postData(
          createUrl(SAVE_CLEANING_SCHEDULE_URL),
          schedule,
          getHeaders(profileObj)
        )
      ),
    deleteSchedule: profileObj =>
      dispatch(
        getData(
          createUrl(DELETE_CLEANING_SCHEDULE_URL),
          getHeaders(profileObj),
          DEFAULT
        )
      )
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CleaningAdmin);
