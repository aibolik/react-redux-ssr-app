import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './index.scss';
import User from '../User';

const Navigation = props => React.createElement(
  'nav',
  { className: 'navigation' },
  React.createElement(
    'ul',
    { className: 'links' },
    React.createElement(
      'li',
      null,
      React.createElement(
        NavLink,
        { exact: true, to: '/', className: 'links__item', activeClassName: 'links__item--active' },
        'Home'
      )
    ),
    React.createElement(
      'li',
      null,
      React.createElement(
        NavLink,
        { to: '/feed', className: 'links__item', activeClassName: 'links__item--active' },
        'Feed'
      )
    )
  ),
  React.createElement(
    'div',
    { className: 'profile' },
    props.user ? React.createElement(User, props.user) : React.createElement(
      Link,
      { to: '/signup', className: 'links__item' },
      'Sign in'
    )
  )
);

export default Navigation;