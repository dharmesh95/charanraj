import axios from "axios";
import { DEFAULT } from "../constants/types.constants";

export const postGroceryData = (url, data, headers, callback) => (dispatch) => {
  axios
    .post(url, data, { headers })
    .then((payload) => {
      callback();
    })
    .catch((error) => {
      console.log(DEFAULT, url, error);
      dispatch({ type: DEFAULT, data: {} });
    });
};
