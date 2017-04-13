import React from 'react';
import PropTypes from 'prop-types';

import '../assets/scss/App.scss';

const App = ({ name }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
    </div>
  );
};

App.propTypes = {
  name: PropTypes.string,
};

export default App;
