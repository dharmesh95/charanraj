import { GOOGLE_USER_PROFILE_OBJ_KEY } from "../constants/session.constants";

export function getProfileObj() {
  let profileObjString = sessionStorage.getItem(GOOGLE_USER_PROFILE_OBJ_KEY);
  if (profileObjString) return JSON.parse(profileObjString);
  return null;
}

export function setProfileObj(profileObj) {
  sessionStorage.setItem(
    GOOGLE_USER_PROFILE_OBJ_KEY,
    JSON.stringify(profileObj)
  );
}

export function removeProfileObj() {
  sessionStorage.removeItem(GOOGLE_USER_PROFILE_OBJ_KEY);
}
