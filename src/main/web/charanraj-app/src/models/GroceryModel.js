export default class GroceryModel {
  user;
  itemName;
  date;
  houseId;

  constructor(user, itemName, date, houseId) {
    this.user = user;
    this.itemName = itemName;
    this.date = date;
    this.houseId = houseId;
  }
}
