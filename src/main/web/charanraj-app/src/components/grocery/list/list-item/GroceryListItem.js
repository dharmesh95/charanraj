import { ListItem, ListItemText, Typography } from "@material-ui/core";
import React from "react";
import { checkIfEmpty } from "../../../../helpers/common.helper";
import { AvatarImg, RoleTypography, StyledListItemAvatar } from "../../../common/common.styles";

export default function GroceryListItem({ obj }) {
  const { user, date, itemName } = obj;
  return (
    <ListItem alignItems="flex-start">
      <StyledListItemAvatar>
        <AvatarImg src={checkIfEmpty(user) ? null : user.imageUrl} alt="img" />
      </StyledListItemAvatar>
      <ListItemText
        primary={
          <React.Fragment>
            <Typography>{checkIfEmpty(user) ? null : user.name}</Typography>
            <RoleTypography>
              {new Date(date).toLocaleDateString() +
                " " +
                new Date(date).toLocaleTimeString()}
            </RoleTypography>
            <Typography>{itemName}</Typography>
          </React.Fragment>
        }
      />
    </ListItem>
  );
}
