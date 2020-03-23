import { ADMIN_USER, MASTER_USER, SUPER_ADMIN_USER } from "../constants/user.constants";
import { checkIfEmpty } from "./common.helper";

export const checkRole = (profileObj, roles) => {
  return !checkIfEmpty(profileObj) ? roles.includes(profileObj.role) : false;
};

export const isMaster = profileObj => {
  let roles = [MASTER_USER];
  return checkRole(profileObj, roles);
};

export const isSuperAdmin = profileObj => {
  let roles = [MASTER_USER, SUPER_ADMIN_USER];
  return checkRole(profileObj, roles);
};

export const isAdmin = profileObj => {
  let roles = [MASTER_USER, SUPER_ADMIN_USER, ADMIN_USER];
  return checkRole(profileObj, roles);
};

export const isAdminVisibile = profileObj => {
  return isAdmin(profileObj);
};

export const isAccessible = (profileObj, key) => {
  return !checkIfEmpty(profileObj) && !checkIfEmpty(profileObj.access)
    ? profileObj.access[key]
    : false;
};
