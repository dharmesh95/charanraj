import { Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, useTheme } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import clsx from "clsx";
import React from "react";
import { withRouter } from "react-router-dom";
import { categories, otherCategories, route } from "../../../constants/route.constants";
import AddressCardIcon from "../../../icons/AddressCardIcon";
import BroomIcon from "../../../icons/BroomIcon";
import CalendarIcon from "../../../icons/CalendarIcon";
import CommentsIcon from "../../../icons/CommentsIcon";
import ShoppingBasketIcon from "../../../icons/ShoppingBasketIcon";
import UserIcon from "../../../icons/UserIcon";
import UtensilsIcon from "../../../icons/UtensilsIcon";

function navigate(props, path) {
  props.history.push(path);
}

function DrawerContainer(props) {
  const { classes, open, handleDrawerClose } = props;
  const theme = useTheme();

  return (
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
  );
}

export default withRouter(DrawerContainer);
