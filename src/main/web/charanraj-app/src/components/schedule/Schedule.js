import { Typography } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import { postData } from "../../actions/action";
import { DOWNLOAD_CLEANING_SCHEDULE } from "../../constants/types.constants";
import { createUrl, DOWNLOAD_SCHEDULE_URL } from "../../constants/url.constants";
import { ACCESS_SCHEDULE_KEY, getHeaders } from "../../constants/user.constants";
import { isAccessible } from "../../helpers/visibility.helper";
import DownloadIcon from "../../icons/DownloadIcon";
import PermissionDenied from "../common/PermissionDenied";
import { DownloadButton, ScheduleTypography } from "./schedule.styles";

class Schedule extends Component {
  downloadSchedule = () => {
    const { profileObj, downloadSchedule } = this.props;
    downloadSchedule(profileObj);
  };

  render() {
    const { profileObj } = this.props;

    return isAccessible(profileObj, ACCESS_SCHEDULE_KEY) ? (
      <>
        <Typography paragraph>Schedule</Typography>
        <ScheduleTypography>
          Click the below button to download <b>current month's schedule</b>
        </ScheduleTypography>
        <DownloadButton
          variant="contained"
          color="primary"
          onClick={() => this.downloadSchedule()}
        >
          <DownloadIcon />
          Download
        </DownloadButton>
      </>
    ) : (
      <PermissionDenied profileObj={profileObj} />
    );
  }
}

Schedule.propTypes = {};

function mapStateToProps(state, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    downloadSchedule: profileObj =>
      dispatch(
        postData(
          createUrl(DOWNLOAD_SCHEDULE_URL),
          profileObj,
          getHeaders(profileObj),
          DOWNLOAD_CLEANING_SCHEDULE
        )
      )
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
