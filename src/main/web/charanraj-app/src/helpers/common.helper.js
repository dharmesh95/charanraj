export const checkIfEmpty = obj => {
  if (obj && Object.keys(obj).length) {
    return false;
  }
  return true;
};
