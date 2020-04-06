export const LOCAL_PATH = "http://localhost:8080";
export const PROD_PATH = "https://jsn-charanraj.herokuapp.com";

export const createUrl = (path, ...pathParams) => {
  let origin = window.location.origin;
  if (process.env.NODE_ENV === "development") {
    origin = LOCAL_PATH;
    // origin = PROD_PATH;
  }
  let pathParamsURL = "";
  if (pathParams) {
    pathParams.forEach(param => {
      pathParamsURL += "/" + param;
    });
  }

  return origin + "/api/" + path + pathParamsURL;
};

export const RECOMMENDATION_URL = "recommendation";

export const GET_VOTE_DATA_URL = "food/getVoteData";

export const POST_VOTE_URL = "vote/addVote";

export const GET_USER_URL = "user/getUser";
export const GET_APPROVED_USERS_URL = "user/getApprovedUsers";

export const GET_SCHEDULE_BY_USER_ID_URL = "cleaning/getCleaningSchedule";
export const GET_FULL_SCHEDULE_URL = "cleaning/getFullCleaningSchedule";
export const UPDATE_SCHEDULE_URL = "cleaning/updateCleaningSchedule";
export const SAVE_CLEANING_SCHEDULE_URL = "cleaning/saveCleaningSchedule";
export const DELETE_CLEANING_SCHEDULE_URL = "cleaning/deleteSchedule";

export const SEND_EVENT_INVITES_URL = "calendar/sendEventInvites";

export const ADD_GROCERY_URL = "grocery/addItem";
export const GET_GROCERY_URL = "grocery/getItems";

export const ADD_FEEDBACK_URL = "feedback/addFeedback";
export const GET_FEEDBACK_URL = "feedback/getFeedback";

export const GET_ALL_REQUESTS_URL = "admin/getRequests";
export const UPDATE_USER_ROLE_URL = "admin/updateUserRole";
export const UPDATE_USER_URL = "admin/updateUser";
export const DELETE_USER_URL = "admin/deleteUser";

export const DOWNLOAD_SCHEDULE_URL = "schedule/download";
