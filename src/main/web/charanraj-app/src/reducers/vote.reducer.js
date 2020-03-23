import { FETCH_VOTE_DATA } from "../constants/types.constants";
import { initialState } from "./app.reducer";

const voteReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_VOTE_DATA:
      return {
        ...state,
        voteData: action.data
      };
    default:
      return state;
  }
};

export default voteReducer;
