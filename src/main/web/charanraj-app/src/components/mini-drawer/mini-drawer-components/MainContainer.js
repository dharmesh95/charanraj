import React from "react";
import { Redirect, Route } from "react-router-dom";
import { getCurrentWeek, getLastWeek } from "../../../helpers/date.helper";
import { isAdminVisibile } from "../../../helpers/visibility.helper";
import { AboutUs } from "../../about-us/AboutUs";
import Admin from "../../admin/Admin";
import Cleaning from "../../cleaning/Cleaning";
import PermissionDenied from "../../common/PermissionDenied";
import Feedback from "../../feedback/Feedback";
import Food from "../../food/Food";
import Grocery from "../../grocery/Grocery";
import Schedule from "../../schedule/Schedule";

function MainContainer(props) {
  const { classes, profileObj } = props;
  const lastWeek = getLastWeek();
  const currentWeek = getCurrentWeek();
  const mainProps = { lastWeek, currentWeek, ...props };
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Route exact path="/home" render={() => <Redirect to="/home/food" />} />
      <Route exact path="/home/food" render={() => <Food {...mainProps} />} />
      <Route
        exact
        path="/home/grocery"
        render={() => <Grocery {...mainProps} />}
      />
      <Route
        exact
        path="/home/cleaning"
        render={() => <Cleaning {...mainProps} />}
      />
      <Route
        exact
        path="/home/schedule"
        render={() => <Schedule {...mainProps} />}
      />
      <Route
        exact
        path="/home/admin"
        render={() =>
          isAdminVisibile(profileObj) ? (
            <Admin {...mainProps} />
          ) : (
            <PermissionDenied profileObj={profileObj} />
          )
        }
      />
      <Route
        exact
        path="/home/feedback"
        render={() => <Feedback {...mainProps} />}
      />
      <Route exact path="/home/about-us" render={() => <AboutUs />} />
    </main>
  );
}

export default MainContainer;
