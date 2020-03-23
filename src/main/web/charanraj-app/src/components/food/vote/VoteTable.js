import Icon from "@material-ui/core/Icon";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React from "react";
import { DOWNVOTE, UPVOTE, VOTE_POINTS_KEY } from "../../../constants/vote.constants";
import { isAdmin } from "../../../helpers/visibility.helper";
import ThumbsDownIcon from "../../../icons/ThumbsDownIcon";
import ThumbsUpIcon from "../../../icons/ThumbsUpIcon";
import TrashIcon from "../../../icons/TrashIcon";
import CircularIndeterminate from "../../common/CircularIndeterminate";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  paper: {
    width: "100%",
    overflowX: "auto"
  }
}));

export default function VoteTable(props) {
  const classes = useStyles();
  const { rows, vote, profileObj, deleteRecommendation } = props;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        {rows && rows.length ? (
          <Table className={classes.table} size="small">
            <TableHead>
              <TableRow>
                <TableCell>Recommendations</TableCell>
                <TableCell style={{ textAlign: "right" }}>Points</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    <div>{row.foodName}</div>
                    <Icon onClick={() => vote(row.id, UPVOTE)}>
                      <ThumbsUpIcon
                        fill={row[VOTE_POINTS_KEY] === 1 ? "green" : "grey"}
                        className="vote-icon"
                      />
                    </Icon>{" "}
                    <Icon onClick={() => vote(row.id, DOWNVOTE)}>
                      <ThumbsDownIcon
                        fill={row[VOTE_POINTS_KEY] === -0.5 ? "red" : "grey"}
                        className="vote-icon"
                      ></ThumbsDownIcon>
                    </Icon>{" "}
                    {isAdmin(profileObj) && (
                      <Icon onClick={() => deleteRecommendation(row.id)}>
                        <TrashIcon
                          fill="grey"
                          className="vote-icon"
                        ></TrashIcon>
                      </Icon>
                    )}
                  </TableCell>
                  <TableCell align="right">{row.points}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <CircularIndeterminate />
        )}
      </Paper>
    </div>
  );
}
