import React, { Component } from 'react';
import { Redirect } from 'react-router';
import './index.scss';

class Registration extends Component {

  signUp = () => {
    let name = this.refs.name.value;
    let username = this.refs.username.value;
    let password = this.refs.password.value;

    if (!name || !password || !username) {
      alert('Please, enter all fields');
      return;
    }

    this.props.requestRegister({ name, username, password });
  }

  render() {
    const { user } = this.props;

    if (user) {
      return <Redirect to={'/'} />
    }

    return (
      <div>
        <h2>Sign up to be able to post here</h2>
        <div className='form-group'>
          <input name='name' type='text' required className='form-group__input' ref='name' placeholder='Name' />
        </div>
        <div className='form-group'>
          <input name='username' type='text' ref='username' required className='form-group__input' placeholder='Username' />
        </div>
        <div className='form-group'>
          <input name='password' type='password' ref='password' required className='form-group__input' placeholder='Password' />
        </div>
        <button className='btn' onClick={this.signUp}>Sign Up</button>
      </div>
    );
  }
}


export default Registration;
