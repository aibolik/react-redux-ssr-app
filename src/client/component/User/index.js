import React from 'react';
import './index.scss';

const User = props => (
  <div className='user'>
    <div className='user__name'>{props.name}</div>
    <div className='user__log-out'>Log out</div>
  </div>
);

export default User;
