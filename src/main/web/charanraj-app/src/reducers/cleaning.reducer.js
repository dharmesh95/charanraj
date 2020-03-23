import {
  DOWNLOAD_CLEANING_SCHEDULE,
  FETCH_CLEANING_SCHEDULE_FOR_USER,
  FETCH_FULL_CLEANING_SCHEDULE
} from "../constants/types.constants";
import { initialState } from "./app.reducer";

const cleaningReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CLEANING_SCHEDULE_FOR_USER:
      return {
        ...state,
        userCleaningSchedule: action.data
      };
    case FETCH_FULL_CLEANING_SCHEDULE:
      return {
        ...state,
        fullCleaningSchedule: action.data
      };
    case DOWNLOAD_CLEANING_SCHEDULE:
      const byteCharacters = atob(action.data);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], {
        type:
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      });
      const blobUrl = URL.createObjectURL(blob);

      let a = document.createElement("a");
      document.body.appendChild(a);
      a.style = "display: none";
      a.href = blobUrl;
      a.download = "New Schedule.xlsx";
      a.click();

      URL.revokeObjectURL(blobUrl);
      return state;
    default:
      return state;
  }
};

export default cleaningReducer;
