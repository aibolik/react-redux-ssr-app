import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const Home = props => (
  <div className='home'>
    {props.user
      ? <Fragment>
          <h2 className='home__welcome'>Hi, {props.user.name}! Do you want to explore our simple blog and post your own content?</h2>
          <Link className='home__join-us' to='/feed'>Get started!</Link>
        </Fragment>
      : <Fragment>
          <h2 className='home__welcome'>Hi, there! Do you want to become an author in this simple blog?</h2>
          <Link className='home__join-us' to='/signup'>Join Us!</Link>
        </Fragment>
    }

  </div>
);

export default Home;
