import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const Home = props => (
  <div className='home'>
    <h2 className='home__welcome'>Hi, there! Do you want to become an author in this simple blog?</h2>
    <Link className='home__join-us' to='/auth'>Join Us!</Link>
  </div>
);

export default Home;
