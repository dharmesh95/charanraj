import {
  FETCH_ALL_REQUESTS,
  FETCH_APPROVED_USERS,
  FETCH_FEEDBACK,
  FETCH_GROCERY
} from "../constants/types.constants";
import { initialState } from "./app.reducer";

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_REQUESTS:
      return {
        ...state,
        requests: action.data
      };
    case FETCH_APPROVED_USERS:
      return {
        ...state,
        approvedUsers: action.data
      };
    case FETCH_FEEDBACK:
      return {
        ...state,
        feedback: action.data
      };
    case FETCH_GROCERY:
      return {
        ...state,
        grocery: action.data
      };
    default:
      return state;
  }
};

export default adminReducer;
