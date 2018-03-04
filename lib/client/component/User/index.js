import React from 'react';
import './index.scss';

const User = props => React.createElement(
  'div',
  { className: 'user' },
  React.createElement(
    'div',
    { className: 'user__name' },
    props.name
  ),
  React.createElement(
    'div',
    { className: 'user__log-out' },
    'Log out'
  )
);

export default User;