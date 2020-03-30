export const getRefreshTime = () => {
  return 1000 * 5; /* 5 seconds */
};

export const IDLE_TIME =
  process.env.NODE_ENV === "development"
    ? 1000 * 60 * 5 * 100 /* for dev 500 minutes */
    : 1000 * 60 * 5; /* 5 minutes */

export const continuousCall = (callback, ...params) => {
  callback(...params);
  return setInterval(() => callback(...params), getRefreshTime());
};
