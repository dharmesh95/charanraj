import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";

function App() {
  return (
    <div>
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
