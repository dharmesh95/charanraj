import { FETCH_USER } from "../constants/types.constants";
import { initialState } from "./app.reducer";

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      let profileObj = action.data;
      if (profileObj && profileObj.houses && profileObj.houses.length === 1) {
        profileObj.house_id = profileObj.houses[0];
      }
      return {
        ...state,
        profileObj: action.data
      };
    default:
      return state;
  }
};

export default userReducer;
