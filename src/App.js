import "./App.css";
import React from "react";

import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import Main from "./pages/Main";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/contacts" component={Contacts} />
      <Redirect from="/" to="/" />
    </Switch>
  );
}

export default App;
