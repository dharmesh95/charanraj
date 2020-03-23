export default class RecommendationModel {
  email;
  foodName;
  date;
  houseId;

  constructor(email, foodName, date, houseId) {
    this.email = email;
    this.foodName = foodName;
    this.date = date;
    this.houseId = houseId;
  }
}
