import React from 'react';
import Application from './Application';

const ResetBtn = ({ resetDisabled, resetGame }) => {

  return (
      <button
      className="reset-btn"
      disabled={resetDisabled}
      onClick={() => resetGame()}
      >Reset Game</button>
  );
};

module.exports = ResetBtn;
