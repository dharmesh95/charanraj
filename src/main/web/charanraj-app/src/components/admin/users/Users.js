import { Button, Divider, Grid, IconButton, ListItem, ListItemAvatar } from "@material-ui/core";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Component, default as React } from "react";
import { ACCESS_CLEANING_KEY, ACCESS_FOOD_KEY, ACCESS_GROCERY_KEY, ACCESS_SCHEDULE_KEY, ADMIN_USER, NORMAL_USER, ROLES } from "../../../constants/user.constants";
import { checkIfEmpty } from "../../../helpers/common.helper";
import { isAdmin, isSuperAdmin } from "../../../helpers/visibility.helper";
import BroomIcon from "../../../icons/BroomIcon";
import CalendarIcon from "../../../icons/CalendarIcon";
import ShoppingBasketIcon from "../../../icons/ShoppingBasketIcon";
import UtensilsIcon from "../../../icons/UtensilsIcon";
import CircularIndeterminate from "../../common/CircularIndeterminate";
import "./../../common/common.css";
import "./users.css";

export default class Users extends Component {
  render() {
    const {
      classes,
      approvedUsers,
      deleteUser,
      updateAccess,
      updateAdmin,
      profileObj
    } = this.props;
    return (
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Users</Typography>
        </ExpansionPanelSummary>
        {!checkIfEmpty(approvedUsers) ? (
          <div>
            <List dense={true}>
              {approvedUsers.map((user, index) => (
                <div key={user.id}>
                  <Divider variant="fullWidth" component="li" />
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar className="list-item-avatar">
                      <img
                        className="avatar-img"
                        src={user.imageUrl}
                        alt="img"
                      ></img>
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <React.Fragment>
                          <Typography>{user.name}</Typography>
                          <Typography className="role">
                            {ROLES[user.role].desc}
                          </Typography>
                          <Grid
                            container
                            direction="row"
                            justify="flex-start"
                            alignItems="center"
                          >
                            <Grid item>
                              <IconButton
                                className="user-icons"
                                onClick={() =>
                                  updateAccess(user, ACCESS_FOOD_KEY, index)
                                }
                              >
                                <UtensilsIcon
                                  className="icons"
                                  color={
                                    user.access
                                      ? user.access.food
                                        ? "green"
                                        : "grey"
                                      : "grey"
                                  }
                                />
                              </IconButton>
                              <IconButton
                                className="user-icons"
                                onClick={() =>
                                  updateAccess(user, ACCESS_GROCERY_KEY, index)
                                }
                              >
                                <ShoppingBasketIcon
                                  className="icons"
                                  color={
                                    user.access
                                      ? user.access.grocery
                                        ? "green"
                                        : "grey"
                                      : "grey"
                                  }
                                />
                              </IconButton>
                              <IconButton
                                className="user-icons"
                                onClick={() =>
                                  updateAccess(user, ACCESS_CLEANING_KEY, index)
                                }
                              >
                                <BroomIcon
                                  className="icons"
                                  color={
                                    user.access
                                      ? user.access.cleaning
                                        ? "green"
                                        : "grey"
                                      : "grey"
                                  }
                                />
                              </IconButton>
                              <IconButton
                                className="user-icons"
                                onClick={() =>
                                  updateAccess(user, ACCESS_SCHEDULE_KEY, index)
                                }
                              >
                                <CalendarIcon
                                  className="icons"
                                  color={
                                    user.access
                                      ? user.access.schedule
                                        ? "green"
                                        : "grey"
                                      : "grey"
                                  }
                                />
                              </IconButton>
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
                                    <span className="button-font">
                                      Make Admin
                                    </span>
                                  </Button>
                                  <Button
                                    size="small"
                                    variant="contained"
                                    disabled={
                                      !isAdmin(user) || isSuperAdmin(user)
                                    }
                                    className={classes.button}
                                    onClick={() =>
                                      updateAdmin(user, NORMAL_USER, index)
                                    }
                                  >
                                    <span className="button-font">
                                      Remove Admin
                                    </span>
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
                                <span className="button-font">Delete User</span>
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
        ) : (
          <CircularIndeterminate />
        )}
      </ExpansionPanel>
    );
  }
}
