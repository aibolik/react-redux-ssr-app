import React from 'react';
import PropTypes from 'prop-types';

const App = ({ name }) => (
  <div>
    <h1>Hello! This is my React Application with Server-Side rendering.</h1>
  </div>
);

App.propTypes = {
  name: PropTypes.string
};

export default App;