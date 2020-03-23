export default class VoteModel {
  recommendationId;
  email;
  points;
  date;
  houseId;

  constructor(recommendationId, email, points, date, houseId) {
    this.recommendationId = recommendationId;
    this.email = email;
    this.points = points;
    this.date = date;
    this.houseId = houseId;
  }
}
