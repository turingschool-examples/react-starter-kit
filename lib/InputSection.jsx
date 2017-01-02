import React from 'react';
import ReactDom from 'react-dom';

export default class InputSection extends React.Component {
  render() {
    return(
      <div>
        <input
          className='input-feild'
          placeholder='Enter Your Guess'></input>
        <button
          className='guess-button'>Guess</button>
        <button
          className='clear-button'>Clear</button>
          <button
            className='reset-button'>Reset</button>
      </div>
    )
  }
}
