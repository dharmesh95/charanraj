import React, { lazy } from "react";
import { Redirect, Route } from "react-router-dom";
import { getCurrentWeek, getLastWeek } from "../../../helpers/date.helper";
import { isAdminVisibile } from "../../../helpers/visibility.helper";
import PermissionDenied from "../../common/PermissionDenied";
import Food from "../../food/Food";

const Grocery = lazy(() => import("./../../grocery/Grocery"));
const Cleaning = lazy(() => import("../../cleaning/Cleaning"));
const Schedule = lazy(() => import("../../schedule/Schedule"));
const Admin = lazy(() => import("../../admin/Admin"));
const Feedback = lazy(() => import("../../feedback/Feedback"));
const AboutUs = lazy(() => import("../../about-us/AboutUs"));

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
