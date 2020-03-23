import { combineReducers } from "redux";
import { LOGOUT } from "../constants/types.constants";
import adminReducer from "./admin.reducer";
import cleaningReducer from "./cleaning.reducer";
import recommendationReducer from "./recommendation.reducer";
import userReducer from "./user.reducer";
import voteReducer from "./vote.reducer";

export const initialState = {
  recommendationData: {},
  voteDataByEmail: {}
};

export const appReducer = combineReducers({
  cleaningReducer,
  voteReducer,
  recommendationReducer,
  userReducer,
  adminReducer
});

export const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    state = initialState;
  }
  return appReducer(state, action);
};
