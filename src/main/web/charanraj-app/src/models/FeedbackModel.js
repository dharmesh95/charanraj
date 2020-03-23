export default class FeedbackModel {
  user;
  feedback;
  date;

  constructor(user, feedback, date) {
    this.user = user;
    this.feedback = feedback;
    this.date = date;
  }
}
