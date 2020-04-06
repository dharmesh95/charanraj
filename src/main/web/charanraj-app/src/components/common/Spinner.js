import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2)
  },
  alignment: { textAlign: "center"}
}));

export default function Spinner() {
  const classes = useStyles();
  return (
    <div className={classes.alignment}>
      <CircularProgress className={classes.progress} />
    </div>
  );
}
