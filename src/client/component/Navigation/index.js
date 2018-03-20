import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './index.scss';
import User from '../User';

const Navigation = props => (
  <nav className='navigation'>
    <ul className='links'>
      <li><NavLink exact to="/" className='links__item' activeClassName='links__item--active'>Home</NavLink></li>
      <li><NavLink to="/feed" className='links__item' activeClassName='links__item--active'>Feed</NavLink></li>
      <li><NavLink to="/todo" className='links__item' activeClassName='links__item--active'>Todo</NavLink></li>
    </ul>
    <div className='profile'>
      {props.user
        ? <User {...props.user} logOut={props.logOut} />
        :
        <React.Fragment>
          <Link to='/signup' className='links__item'>Sign Up</Link>
          <Link to='/signin' className='links__item'>Sign In</Link>
        </React.Fragment>}
    </div>
  </nav>
);

export default Navigation;
