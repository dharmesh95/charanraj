import { AppBar, IconButton, Menu, MenuItem, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import React from "react";
import { GoogleLogout } from "react-google-login";
import { ProfileImg } from "../mini-drawer.styles";

export default function AppBarContainer({
  classes,
  open,
  handleDrawerOpen,
  handleMenu,
  profileObj,
  anchorEl,
  openMenu,
  handleClose,
  logoutSuccess
}) {
  return (
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
  );
}
