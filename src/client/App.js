import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logOut } from './store/user';
import 'isomorphic-fetch';
import './styles/core.scss';
import Navigation from './component/Navigation';

import Home from './routes/Home/containers/HomeContainer';
import Feed from './routes/Feed/containers/FeedContainer';
import Registration from './routes/Registration/containers/RegistrationContainer';
import Authentication from './routes/Authentication/containers/AuthenticationContainer';

const App = ({ name }) => {
  const NavigationWithUser = connect(
    state => ({user: state.user.user}),
    dispatch => bindActionCreators({ logOut }, dispatch))(Navigation);

  return (
    <div className='app'>
      <div className='page'>
        <NavigationWithUser />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/feed" component={Feed} />
          <Route path="/signup" component={Registration} />
          <Route path="/signin" component={Authentication} />
          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  )
};

App.propTypes = {
  name: PropTypes.string
};

export default App;
