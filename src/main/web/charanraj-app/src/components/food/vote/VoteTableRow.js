import { Icon, TableCell, TableRow } from "@material-ui/core";
import React from "react";
import { GREEN_COLOR, GREY_COLOR, RED_COLOR } from "../../../constants/color.constants";
import { DOWNVOTE, UPVOTE, VOTE_POINTS_KEY } from "../../../constants/vote.constants";
import { isAdmin } from "../../../helpers/visibility.helper";
import ThumbsDownIcon from "../../../icons/ThumbsDownIcon";
import ThumbsUpIcon from "../../../icons/ThumbsUpIcon";
import TrashIcon from "../../../icons/TrashIcon";

export default function VoteTableRow({
  row,
  vote,
  profileObj,
  deleteRecommendation
}) {
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        <div>{row.foodName}</div>
        <Icon onClick={() => vote(row.id, UPVOTE)}>
          <ThumbsUpIcon
            fill={row[VOTE_POINTS_KEY] === 1 ? GREEN_COLOR : GREY_COLOR}
          />
        </Icon>{" "}
        <Icon onClick={() => vote(row.id, DOWNVOTE)}>
          <ThumbsDownIcon
            fill={row[VOTE_POINTS_KEY] === -0.5 ? RED_COLOR : GREY_COLOR}
          />
        </Icon>{" "}
        {isAdmin(profileObj) && (
          <Icon onClick={() => deleteRecommendation(row.id)}>
            <TrashIcon fill={GREY_COLOR} />
          </Icon>
        )}
      </TableCell>
      <TableCell align="right">{row.points}</TableCell>
    </TableRow>
  );
}
