import { VOTE_POINTS_KEY } from "../constants/vote.constants";

export const voteFoodData = (recommendationID, foodData, vote) => {
  let newFoodData = [];
  foodData.forEach(food => {
    if (food.id === recommendationID) {
      food[VOTE_POINTS_KEY] = vote;
    }
    newFoodData.push(food);
  });
  return newFoodData;
};
