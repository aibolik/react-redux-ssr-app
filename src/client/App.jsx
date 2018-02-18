import React from 'react';
import PropTypes from 'prop-types';

const App = ({ name }) => (
  <div>
    <p>{name}</p>
  </div>
);

App.propTypes = {
  name: PropTypes.string
};

export default App;