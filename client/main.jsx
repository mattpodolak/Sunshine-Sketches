import React from 'react';
import { Meteor } from 'meteor/meteor';
import ReactDOM from "react-dom";
import Hello from '/imports/ui/Hello.jsx'


import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

var hist = createBrowserHistory();

Meteor.startup(() => {
  ReactDOM.render(
      <Router history={hist}>
        <Switch>
          <Route exact path="/" component={Hello} />
          <Route component={Hello}/>
        </Switch>
      </Router>,
    document.getElementById("react-target")
  );
});