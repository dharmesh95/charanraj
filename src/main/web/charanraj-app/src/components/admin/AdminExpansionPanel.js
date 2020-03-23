import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import CleaningAdmin from "./cleaning/CleaningAdmin";
import FeedbackAdmin from "./feedback/FeedbackAdmin";
import Requests from "./requests/Requests";
import Users from "./users/Users";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "100%",
    marginTop: "5px"
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  },
  rightIcon: {
    marginLeft: theme.spacing(1)
  },
  button: {
    marginBottom: "10px",
    marginRight: "10px"
  }
}));

export default function AdminExpansionPanel(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Requests classes={classes} {...props} />
      <Users classes={classes} {...props} />
      <CleaningAdmin classes={classes} {...props} />
      <FeedbackAdmin classes={classes} {...props} />
    </div>
  );
}
