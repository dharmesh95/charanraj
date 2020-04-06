import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Spinner from "./components/common/Spinner";
import Login from "./Login";

const Home = lazy(() => import("./Home"));

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
      </Switch>
    </Suspense>
  );
}

export default App;
