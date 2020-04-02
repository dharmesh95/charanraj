import { AppBar, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles, Menu, MenuItem, Toolbar, Typography, useTheme } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import React from "react";
import { GoogleLogout } from "react-google-login";
import { Redirect, Route, withRouter } from "react-router-dom";
import { categories, otherCategories, route } from "../../constants/route.constants";
import { isAdminVisibile } from "../../helpers/visibility.helper";
import AddressCardIcon from "../../icons/AddressCardIcon";
import BroomIcon from "../../icons/BroomIcon";
import CalendarIcon from "../../icons/CalendarIcon";
import CommentsIcon from "../../icons/CommentsIcon";
import ShoppingBasketIcon from "../../icons/ShoppingBasketIcon";
import UserIcon from "../../icons/UserIcon";
import UtensilsIcon from "../../icons/UtensilsIcon";
import { AboutUs } from "../about-us/AboutUs";
import Admin from "../admin/Admin";
import Cleaning from "../cleaning/Cleaning";
import PermissionDenied from "../common/PermissionDenied";
import { WithSpinner } from "../common/WithSpinner";
import Feedback from "../feedback/Feedback";
import Food from "../food/Food";
import Grocery from "../grocery/Grocery";
import Schedule from "../schedule/Schedule";
import { ProfileImg } from "./mini-drawer.styles";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: "3%"
  },
  title: {
    flexGrow: 1
  }
}));

function navigate(props, path) {
  props.history.push(path);
}

function MiniDrawer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const { profileObj, logoutSuccess } = props;

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.title}>
            Charanraj
          </Typography>

          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <ProfileImg src={profileObj.imageUrl} alt="img" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              open={openMenu}
              onClose={handleClose}
            >
              <GoogleLogout
                clientId="579327787651-59gvtsh6qe4ijk1lqerhhojt862ddd4r.apps.googleusercontent.com"
                buttonText="Logout"
                onLogoutSuccess={logoutSuccess}
                render={renderProps => (
                  <MenuItem onClick={renderProps.onClick}>Sign Out</MenuItem>
                )}
              ></GoogleLogout>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
        open={open}
      >
        <div className={classes.toolbar} onClick={handleDrawerClose}>
          <IconButton>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {categories.map((text, index) => (
            <ListItem
              button
              key={text}
              onClick={() => navigate(props, route[text])}
            >
              <ListItemIcon>
                <div>
                  {index === 0 && <UtensilsIcon />}
                  {index === 1 && <ShoppingBasketIcon />}
                  {index === 2 && <BroomIcon />}
                  {index === 3 && <CalendarIcon />}
                </div>
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {otherCategories.map((text, index) => (
            <ListItem
              button
              key={text}
              onClick={() => navigate(props, route[text])}
            >
              <ListItemIcon>
                <div>
                  {index === 0 && <UserIcon />}
                  {index === 1 && <CommentsIcon />}
                  {index === 2 && <AddressCardIcon />}
                </div>
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Route exact path="/home" render={() => <Redirect to="/home/food" />} />
        <Route exact path="/home/food" render={() => <Food {...props} />} />
        <Route
          exact
          path="/home/grocery"
          render={() => <Grocery {...props} />}
        />
        <Route
          exact
          path="/home/cleaning"
          render={() => <Cleaning {...props} />}
        />
        <Route
          exact
          path="/home/schedule"
          render={() => <Schedule {...props} />}
        />
        <Route
          exact
          path="/home/admin"
          render={() =>
            isAdminVisibile(profileObj) ? (
              <Admin {...props} />
            ) : (
              <PermissionDenied profileObj={profileObj} />
            )
          }
        />
        <Route
          exact
          path="/home/feedback"
          render={() => <Feedback {...props} />}
        />
        <Route exact path="/home/about-us" render={() => <AboutUs />} />
      </main>
    </div>
  );
}

export default withRouter(WithSpinner(MiniDrawer));
