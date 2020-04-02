import { Divider, List, ListItem, ListItemText, Typography } from "@material-ui/core";
import React from "react";
import { checkIfEmpty } from "../../../helpers/common.helper";
import { AvatarImg, StyledListItemAvatar } from "../../common/common.styles";
import { WithSpinner } from "../../common/WithSpinner";

function FeedbackList({ feedback }) {
  return (
    <div>
      <List dense={true}>
        {feedback.map(obj => (
          <div key={obj.id}>
            <Divider variant="fullWidth" component="li" />
            <ListItem alignItems="flex-start">
              <StyledListItemAvatar>
                <AvatarImg
                  src={checkIfEmpty(obj.user) ? null : obj.user.imageUrl}
                  alt="img"
                />
              </StyledListItemAvatar>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography>
                      {checkIfEmpty(obj.user) ? null : obj.user.name}
                    </Typography>
                    <Typography className="role">
                      {new Date(obj.date).toLocaleDateString() +
                        " " +
                        new Date(obj.date).toLocaleTimeString()}
                    </Typography>
                    <Typography>{obj.feedback}</Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          </div>
        ))}
      </List>
    </div>
  );
}

export default WithSpinner(FeedbackList);
