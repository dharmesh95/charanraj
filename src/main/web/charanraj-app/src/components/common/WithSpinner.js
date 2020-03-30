import React from "react";
import CircularIndeterminate from "./CircularIndeterminate";

export const WithSpinner = WrappedComponent => ({
  isLoading,
  ...otherProps
}) => {
  return isLoading ? (
    <CircularIndeterminate />
  ) : (
    <WrappedComponent {...otherProps} />
  );
};
