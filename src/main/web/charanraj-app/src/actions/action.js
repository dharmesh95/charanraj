import axios from "axios";
import { DEFAULT } from "../constants/types.constants";
import { transformDefault } from "../utils/transformerUtils";

export const getData = (
  url,
  headers,
  type,
  transformer = transformDefault
) => dispatch => {
  axios
    .get(url, { headers })
    .then(payload => {
      dispatch({ type, data: transformer(payload.data) });
    })
    .catch(error => {
      console.log(type, url, error);
      dispatch({ type, data: {} });
    });
};

export const postData = (
  url,
  data,
  headers,
  type = DEFAULT,
  transformer = transformDefault
) => dispatch => {
  axios
    .post(url, data, { headers })
    .then(payload => {
      dispatch({ type, data: transformer(payload.data) });
    })
    .catch(error => {
      console.log(type, url, error);
      dispatch({ type, data: {} });
    });
};

export const resetState = type => dispatch => {
  dispatch({ type, data: {} });
};
