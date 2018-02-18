import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import 'isomorphic-fetch';

import Home from './routes/Home';
import Feed from './routes/Feed/containers/FeedContainer';

const App = ({ name }) => (
  <div>
    <h1>Hello! This is my React Application with Server-Side rendering.</h1>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/feed">Feed</Link></li>
    </ul>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/feed" component={Feed} />
      <Redirect to="/" />
    </Switch>
  </div>
);

App.propTypes = {
  name: PropTypes.string
};

export default App;