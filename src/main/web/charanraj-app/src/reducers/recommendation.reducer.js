import { initialState } from "./app.reducer";
import { FETCH_ALL_RECOS } from "../constants/types.constants";

const recommendationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_RECOS:
      return {
        ...state,
        recommendationData: action.data
      };
    default:
      return state;
  }
};

export default recommendationReducer;
