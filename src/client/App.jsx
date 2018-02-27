import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import 'isomorphic-fetch';
import './styles/core.scss';
import Navigation from './component/Navigation';

import Home from './routes/Home';
import Feed from './routes/Feed/containers/FeedContainer';

const App = ({ name }) => (
  <div className='app'>
    <Navigation />
    <div className='page'>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/feed" component={Feed} />
        <Redirect to="/" />
      </Switch>
    </div>
  </div>
);

App.propTypes = {
  name: PropTypes.string
};

export default App;
