export default class GroceryItem {
  user;
  itemName;
  date;

  constructor(user, itemName, date, houseId) {
    this.user = user;
    this.itemName = itemName;
    this.date = date;
  }
}
