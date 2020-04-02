import { Button, Divider, Grid, List, ListItem, ListItemText, Typography } from "@material-ui/core";
import React, { Component } from "react";
import { GREEN_COLOR, GREY_COLOR } from "../../../constants/color.constants";
import { ACCESS_CLEANING_KEY, ACCESS_FOOD_KEY, ACCESS_GROCERY_KEY, ACCESS_SCHEDULE_KEY, ADMIN_USER, NORMAL_USER, ROLES } from "../../../constants/user.constants";
import { isAdmin, isSuperAdmin } from "../../../helpers/visibility.helper";
import BroomIcon from "../../../icons/BroomIcon";
import CalendarIcon from "../../../icons/CalendarIcon";
import ShoppingBasketIcon from "../../../icons/ShoppingBasketIcon";
import UtensilsIcon from "../../../icons/UtensilsIcon";
import { AvatarImg, RoleTypography, StyledListItemAvatar } from "../../common/common.styles";
import { WithSpinner } from "../../common/WithSpinner";
import { StyledSpan, UserIconButton } from "./users.styles";

class UserList extends Component {
  render() {
    const {
      approvedUsers,
      updateAccess,
      profileObj,
      updateAdmin,
      deleteUser,
      classes
    } = this.props;

    return (
      <div>
        <List dense={true}>
          {approvedUsers.map((user, index) => (
            <div key={user.id}>
              <Divider variant="fullWidth" component="li" />
              <ListItem alignItems="flex-start">
                <StyledListItemAvatar>
                  <AvatarImg src={user.imageUrl} alt="img" />
                </StyledListItemAvatar>
                <ListItemText
                  primary={
                    <React.Fragment>
                      <Typography>{user.name}</Typography>
                      <RoleTypography>{ROLES[user.role].desc}</RoleTypography>
                      <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="center"
                      >
                        <Grid item>
                          <UserIconButton
                            onClick={() =>
                              updateAccess(user, ACCESS_FOOD_KEY, index)
                            }
                          >
                            <UtensilsIcon
                              className="icons"
                              color={
                                user.access
                                  ? user.access.food
                                    ? GREEN_COLOR
                                    : GREY_COLOR
                                  : GREY_COLOR
                              }
                            />
                          </UserIconButton>
                          <UserIconButton
                            onClick={() =>
                              updateAccess(user, ACCESS_GROCERY_KEY, index)
                            }
                          >
                            <ShoppingBasketIcon
                              className="icons"
                              color={
                                user.access
                                  ? user.access.grocery
                                    ? GREEN_COLOR
                                    : GREY_COLOR
                                  : GREY_COLOR
                              }
                            />
                          </UserIconButton>
                          <UserIconButton
                            onClick={() =>
                              updateAccess(user, ACCESS_CLEANING_KEY, index)
                            }
                          >
                            <BroomIcon
                              className="icons"
                              color={
                                user.access
                                  ? user.access.cleaning
                                    ? GREEN_COLOR
                                    : GREY_COLOR
                                  : GREY_COLOR
                              }
                            />
                          </UserIconButton>
                          <UserIconButton
                            onClick={() =>
                              updateAccess(user, ACCESS_SCHEDULE_KEY, index)
                            }
                          >
                            <CalendarIcon
                              className="icons"
                              color={
                                user.access
                                  ? user.access.schedule
                                    ? GREEN_COLOR
                                    : GREY_COLOR
                                  : GREY_COLOR
                              }
                            />
                          </UserIconButton>
                          <br />
                          {isAdmin(profileObj) ? (
                            <div>
                              <Button
                                size="small"
                                variant="contained"
                                disabled={isAdmin(user)}
                                className={classes.button}
                                onClick={() =>
                                  updateAdmin(user, ADMIN_USER, index)
                                }
                              >
                                <StyledSpan>Make Admin</StyledSpan>
                              </Button>
                              <Button
                                size="small"
                                variant="contained"
                                disabled={!isAdmin(user) || isSuperAdmin(user)}
                                className={classes.button}
                                onClick={() =>
                                  updateAdmin(user, NORMAL_USER, index)
                                }
                              >
                                <StyledSpan>Remove Admin</StyledSpan>
                              </Button>
                            </div>
                          ) : (
                            <br />
                          )}
                          <Button
                            size="small"
                            variant="contained"
                            disabled={isAdmin(user)}
                            className={classes.button}
                            onClick={() => deleteUser(user, index)}
                          >
                            <StyledSpan>Delete User</StyledSpan>
                          </Button>
                        </Grid>
                      </Grid>
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
}

export default WithSpinner(UserList);
