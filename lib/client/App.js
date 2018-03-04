import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import 'isomorphic-fetch';
import './styles/core.scss';
import Navigation from './component/Navigation';

import Home from './routes/Home/containers/HomeContainer';
import Feed from './routes/Feed/containers/FeedContainer';
import Registration from './routes/Registration/containers/RegistrationContainer';

const App = ({ name }) => {
  const NavigationWithUser = connect(state => ({ user: state.user.user }), null)(Navigation);

  return React.createElement(
    'div',
    { className: 'app' },
    React.createElement(
      'div',
      { className: 'page' },
      React.createElement(NavigationWithUser, null),
      React.createElement(
        Switch,
        null,
        React.createElement(Route, { exact: true, path: '/', component: Home }),
        React.createElement(Route, { path: '/feed', component: Feed }),
        React.createElement(Route, { path: '/signup', component: Registration }),
        React.createElement(Redirect, { to: '/' })
      )
    )
  );
};

App.propTypes = {
  name: PropTypes.string
};

export default App;