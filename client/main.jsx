import React from 'react';
import { Meteor } from 'meteor/meteor';
import ReactDOM from "react-dom";
import Home from '/imports/ui/Home.js'


import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
// import Terms from '../imports/ui/Terms';
// import Privacy from '../imports/ui/Privacy';

var hist = createBrowserHistory();

Meteor.startup(() => {
  ReactDOM.render(
      <Router history={hist}>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/terms" component={Terms} />
          <Route exact path="/policy" component={Privacy} /> */}
          <Route component={Home}/>
        </Switch>
      </Router>,
    document.getElementById("react-target")
  );
});