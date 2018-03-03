import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './index.scss';
import User from '../User';

const Navigation = props => (
  <nav className='navigation'>
    <ul className='links'>
      <li><NavLink exact to="/" className='links__item' activeClassName='links__item--active'>Home</NavLink></li>
      <li><NavLink to="/feed" className='links__item' activeClassName='links__item--active'>Feed</NavLink></li>
    </ul>
    <div className='profile'>
      {props.user ? <User {...props.user} /> : <Link to='/signup' className='links__item'>Sign in</Link>}
    </div>
  </nav>
);

export default Navigation;
