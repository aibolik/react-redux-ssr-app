import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';
import User from '../User';

const Navigation = props => (
  <nav className='navigation'>
    <ul className='links'>
      <li><NavLink exact to="/" className='links__item' activeClassName='links__item--active'>Home</NavLink></li>
      <li><NavLink to="/feed" className='links__item' activeClassName='links__item--active'>Feed</NavLink></li>
    </ul>
    <div className='profile'>
      <User name='Aibol' />
    </div>
  </nav>
);

export default Navigation;
