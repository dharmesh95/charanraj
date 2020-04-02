import { Button, TextField } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import { postData } from "../../../actions/action";
import { ADD_RECO_URL, createUrl } from "../../../constants/url.constants";
import { getHeaders } from "../../../constants/user.constants";
import PaperPlaneIcon from "../../../icons/PaperPlaneIcon";
import RecommendationModel from "../../../models/RecommendationModel";
import { DetailsHeaderTypography } from "../food.styles";
import { RecommendationDiv } from "./recommendation.styles";

class Recommendation extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }

  addReco = () => {
    const { name } = this.state;
    const {
      profileObj,
      addRecommendation,
      fetchAllFoodData,
      updateWeek,
      currentWeek
    } = this.props;
    if (name && name.length > 2) {
      let recommendation = new RecommendationModel(
        profileObj.email,
        name,
        new Date(),
        profileObj.houseId
      );
      addRecommendation(recommendation, profileObj);
      this.setState({ name: "" });
      updateWeek(currentWeek);
      setTimeout(() => {
        fetchAllFoodData();
      }, 500);
    }
  };

  handleChange = $event => {
    this.setState({ name: $event.target.value });
  };

  render() {
    const { name } = this.state;
    const { classes } = this.props;
    return (
      <RecommendationDiv>
        <DetailsHeaderTypography variant="caption">
          Please check if already present!
        </DetailsHeaderTypography>
        <TextField
          id="standard-name"
          label="Food Name"
          placeholder="Min. 3 characters"
          className={classes.textField}
          value={name}
          onChange={this.handleChange}
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => this.addReco()}
        >
          Send
          <PaperPlaneIcon />
        </Button>
      </RecommendationDiv>
    );
  }
}

Recommendation.propTypes = {};

function mapStateToProps(state, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    addRecommendation: (recommendation, profileObj) =>
      dispatch(
        postData(
          createUrl(ADD_RECO_URL),
          recommendation,
          getHeaders(profileObj)
        )
      )
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Recommendation);
