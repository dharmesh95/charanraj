export const getRefreshTime = () => {
  return 1000 * 5; /* 5 seconds */
};

export const IDLE_TIME = 1000 * 60 * 5; /* 5 minutes */

export const continuousCall = (callback, ...params) => {
  callback(...params);
  return setInterval(() => callback(...params), getRefreshTime());
};
