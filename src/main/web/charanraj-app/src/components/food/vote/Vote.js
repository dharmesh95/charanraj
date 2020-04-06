import { makeStyles, Paper } from "@material-ui/core";
import React from "react";
import { NoDataDiv } from "../../common/common.styles";
import VoteTable from "./VoteTable";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  paper: {
    width: "100%",
    overflowX: "auto"
  }
}));

export default function Vote({ voteData, ...otherProps }) {
  const classes = useStyles();
  const showTable = voteData && voteData.length;
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        {showTable ? (
          <VoteTable rows={voteData} {...otherProps} />
        ) : (
          <NoDataDiv />
        )}
      </Paper>
    </div>
  );
}
