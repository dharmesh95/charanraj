import { Button, Paper, Typography } from "@material-ui/core";
import { Component, default as React } from "react";
import { connect } from "react-redux";
import { postData } from "../../actions/action";
import { ADD_FEEDBACK_URL, createUrl } from "../../constants/url.constants";
import { getHeaders } from "../../constants/user.constants";
import PaperPlaneIcon from "../../icons/PaperPlaneIcon";
import FeedbackModel from "../../models/FeedbackModel";
import { StyledTextFied } from "../common/common.styles";
import { FeedbackDiv } from "./feedback.styles";

class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = { feedback: "" };
  }

  handleChange = $event => {
    this.setState({ feedback: $event.target.value });
  };

  sendFeedback = () => {
    const { feedback } = this.state;
    const { profileObj, saveFeedback } = this.props;
    if (feedback && feedback.length > 2) {
      let feedbackObj = new FeedbackModel(profileObj, feedback, new Date());
      saveFeedback(feedbackObj, profileObj);
      this.setState({ feedback: "" });
    }
  };

  render() {
    const { feedback } = this.state;
    return (
      <div>
        <Typography paragraph>Feedback</Typography>
        <Paper>
          <FeedbackDiv>
            <StyledTextFied
              id="standard-multiline-static"
              label="Give Us Feedback"
              multiline
              rows="6"
              placeholder="Let's make it better together!"
              margin="normal"
              onChange={this.handleChange}
              value={feedback}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.sendFeedback()}
            >
              Send
              <PaperPlaneIcon />
            </Button>
          </FeedbackDiv>
        </Paper>
      </div>
    );
  }
}

Feedback.propTypes = {};

function mapStateToProps(state, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    saveFeedback: (feedbackObj, profileObj) =>
      dispatch(
        postData(
          createUrl(ADD_FEEDBACK_URL),
          feedbackObj,
          getHeaders(profileObj)
        )
      )
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
