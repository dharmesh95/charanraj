import { Typography } from "@material-ui/core";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React from "react";
import { StyledExpansionPanelDetails } from "../common/common.styles";

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
  }
}));

export default function SimpleExpansionPanel(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {React.Children.map(props.children, child => (
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              {child.props.panelHeader}
            </Typography>
          </ExpansionPanelSummary>
          <StyledExpansionPanelDetails>
            {React.cloneElement(child, { classes, ...props })}
          </StyledExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </div>
  );
}
