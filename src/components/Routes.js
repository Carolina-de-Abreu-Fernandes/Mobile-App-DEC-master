import React from 'react';
import { Router, Switch, Route } from 'react-router';
import Login from '../Pages/Login.jsx';
import Register from '../Pages/Register.jsx';
import Home from '../Pages/Home.jsx';
const Routes = () => {
  <Router>
    <Switch>
      <Route component={Login} exact path="/login" />
      <Route component={Register} exact path="/register" />
      <Route component={Home} exact path="/" />
    </Switch>
  </Router>;
};
