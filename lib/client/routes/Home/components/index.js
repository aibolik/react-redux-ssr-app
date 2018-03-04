import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const Home = props => React.createElement(
  'div',
  { className: 'home' },
  props.user ? React.createElement(
    Fragment,
    null,
    React.createElement(
      'h2',
      { className: 'home__welcome' },
      'Hi, ',
      props.user.name,
      '! Do you want to explore our simple blog and post your own content?'
    ),
    React.createElement(
      Link,
      { className: 'home__join-us', to: '/feed' },
      'Get started!'
    )
  ) : React.createElement(
    Fragment,
    null,
    React.createElement(
      'h2',
      { className: 'home__welcome' },
      'Hi, there! Do you want to become an author in this simple blog?'
    ),
    React.createElement(
      Link,
      { className: 'home__join-us', to: '/signup' },
      'Join Us!'
    )
  )
);

export default Home;