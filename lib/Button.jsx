import React from 'react';
import ReactDom from 'react-dom';

export default class Button extends React.Component {
  render() {
    return(
      <div>
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
