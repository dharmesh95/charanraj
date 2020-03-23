export const MASTER_USER = "M";
export const SUPER_ADMIN_USER = "S";
export const ADMIN_USER = "A";
export const NORMAL_USER = "N";
export const REJECTED_USER = "R";
export const UNKNOWN_USER = "U";

export const NOT_ENOUGH_PERMISSION = "You don't have enough permissions!";
export const REQUEST_SENT_TO_ADMIN = "Your request has been sent to Admin";
export const REQUEST_REJECTED = "Your request was rejected by the Admin";

export const UNKNOWN_MESSAGE = "The Database might be down. Try refreshing";

export const ROLES = {
  [MASTER_USER]: { desc: "Master" },
  [SUPER_ADMIN_USER]: { desc: "Super Admin" },
  [ADMIN_USER]: { desc: "Admin" },
  [NORMAL_USER]: { desc: "Normal", message: NOT_ENOUGH_PERMISSION },
  [REJECTED_USER]: { desc: "Rejected", message: REQUEST_REJECTED },
  [UNKNOWN_USER]: { desc: "Unknown", message: NOT_ENOUGH_PERMISSION }
};

export const ACCESS_FOOD_KEY = "food";
export const ACCESS_GROCERY_KEY = "grocery";
export const ACCESS_CLEANING_KEY = "cleaning";
export const ACCESS_SCHEDULE_KEY = "schedule";

export const USER_NAME_MAPPING = {
  userName1: "user1",
  userName2: "user2"
};

export const getHeaders = profileObj => {
  return {
    Authorization: "Basic " + btoa(profileObj.email + ":"),
    "X-Requested-With": "XMLHttpRequest"
  };
};
