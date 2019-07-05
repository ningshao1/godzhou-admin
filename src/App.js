import React from "react";
import "./App.less";
import { Route, Redirect, Switch } from "react-router-dom";
import login from "./router/login";
import Home from "./router/home";
function App() {
  return (
    <Switch>
      <Route path="/login" component={login} />
      <Route
        path="/"
        render={props =>
          true ? <Home {...props} /> : <Redirect to="/login" />
        }
      />
    </Switch>
  );
}

export default App;
