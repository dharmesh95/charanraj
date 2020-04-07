export default class GroceryDTO {
  groceryItem;
  lastWeekStartDate;

  constructor(groceryItem, lastWeekStartDate) {
    this.groceryItem = groceryItem;
    this.lastWeekStartDate = lastWeekStartDate;
  }
}
