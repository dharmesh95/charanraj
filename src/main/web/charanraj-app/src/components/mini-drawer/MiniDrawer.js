import { CssBaseline } from "@material-ui/core";
import React from "react";
import { WithSpinner } from "../common/WithSpinner";
import AppBarContainer from "./mini-drawer-components/AppBarContainer";
import DrawerContainer from "./mini-drawer-components/DrawerContainer";
import MainContainer from "./mini-drawer-components/MainContainer";
import { useMiniDrawerStyles } from "./mini-drawer.styles";

function MiniDrawer(props) {
  const classes = useMiniDrawerStyles();
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

  const appBarProps = {
    classes,
    open,
    handleDrawerOpen,
    handleMenu,
    profileObj,
    anchorEl,
    openMenu,
    handleClose,
    logoutSuccess
  };

  const drawerProps = { classes, open, handleDrawerClose };

  const mainProps = { classes, profileObj };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBarContainer {...appBarProps} />
      <DrawerContainer {...drawerProps} />
      <MainContainer {...mainProps} />
    </div>
  );
}

export default WithSpinner(MiniDrawer);
