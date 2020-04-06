import { InputLabel, MenuItem, Select, Typography } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteData, postData } from "../../actions/action";
import { continuousCall } from "../../constants/time.constants";
import { FETCH_VOTE_DATA } from "../../constants/types.constants";
import { createUrl, GET_VOTE_DATA_URL, POST_VOTE_URL, RECOMMENDATION_URL } from "../../constants/url.constants";
import { ACCESS_FOOD_KEY, getHeaders } from "../../constants/user.constants";
import { getCurrentWeek } from "../../helpers/date.helper";
import { isAccessible } from "../../helpers/visibility.helper";
import VoteModel from "../../models/VoteModel";
import PermissionDenied from "../common/PermissionDenied";
import { FoodFormControl } from "./food.styles";
import Recommendation from "./recommendation/Recommendation";
import SimpleExpansionPanel from "./SimpleExpansionPanel";
import Vote from "./vote/Vote";

class Food extends Component {
  constructor(props) {
    super(props);
    this.state = {
      week: getCurrentWeek()
    };
  }

  vote = (recommendationID, points) => {
    const { profileObj, addVote, fetchVoteData } = this.props;
    const { week } = this.state;
    let vote = new VoteModel(
      recommendationID,
      profileObj.email,
      points,
      new Date(),
      profileObj.houseId
    );
    addVote(profileObj, vote);
    fetchVoteData(profileObj, week.startDate.value, week.endDate.value);
  };

  deleteRecommendation = id => {
    const { profileObj, deleteRecommendationById } = this.props;
    deleteRecommendationById(id, profileObj);
    setTimeout(() => {
      this.fetchAllFoodData();
    }, 500);
  };

  handleChange = event => {
    const { currentWeek, lastWeek } = this.props;
    let week = currentWeek;
    if (lastWeek.startDate.displayValue === event.target.value) {
      week = lastWeek;
    }
    this.setState({ ...this.state, week });
  };

  updateWeek = week => {
    this.setState({ ...this.state, week });
  };

  fetchAllFoodData = () => {
    const { fetchVoteData, profileObj } = this.props;
    const { week } = this.state;
    fetchVoteData(profileObj, week.startDate.value, week.endDate.value);
  };

  componentDidMount() {
    clearInterval(this.foodInterval);
    this.foodInterval = continuousCall(this.fetchAllFoodData, this.props);
  }

  componentDidUpdate(prevProps, prevState) {
    const { week } = this.state;
    if (week !== prevState.week) {
      this.componentDidMount();
    }
  }

  render() {
    const { week } = this.state;
    const { profileObj, currentWeek, lastWeek } = this.props;
    return isAccessible(profileObj, ACCESS_FOOD_KEY) ? (
      <div>
        <Typography paragraph>Food</Typography>
        <FoodFormControl>
          <InputLabel htmlFor="date-simple">Select Week</InputLabel>
          <Select
            value={week.startDate.displayValue}
            onChange={this.handleChange}
            inputProps={{
              name: "date",
              id: "date-simple"
            }}
          >
            <MenuItem value={currentWeek.startDate.displayValue}>
              This Week
            </MenuItem>
            <MenuItem value={lastWeek.startDate.displayValue}>
              Previous Week
            </MenuItem>
          </Select>
        </FoodFormControl>
        <SimpleExpansionPanel
          vote={this.vote}
          deleteRecommendation={this.deleteRecommendation}
          updateWeek={this.updateWeek}
          fetchAllFoodData={this.fetchAllFoodData}
          {...this.props}
        >
          <Recommendation panelHeader="Recommendation" />
          <Vote panelHeader="Vote" />
        </SimpleExpansionPanel>
      </div>
    ) : (
      <PermissionDenied profileObj={profileObj} />
    );
  }

  componentWillUnmount() {
    clearInterval(this.foodInterval);
  }
}

Food.propTypes = {};

function mapStateToProps(state, ownProps) {
  return {
    voteData: state.voteReducer.voteData
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteRecommendationById: (id, profileObj) =>
      deleteData(createUrl(RECOMMENDATION_URL, id), getHeaders(profileObj)),
    fetchVoteData: (user, weekStartDate, weekEndDate) =>
      dispatch(
        postData(
          createUrl(GET_VOTE_DATA_URL),
          { user, week: { weekStartDate, weekEndDate } },
          getHeaders(user),
          FETCH_VOTE_DATA
        )
      ),
    addVote: (user, vote) =>
      dispatch(
        postData(
          createUrl(POST_VOTE_URL),
          { user, vote },
          getHeaders(user),
          FETCH_VOTE_DATA
        )
      )
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Food);
