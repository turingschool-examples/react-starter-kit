import React from 'react';
import ReactDom from 'react-dom';

export default class Button extends React.Component {

  render(text, onClick) {
    return(
      <div>
        <button
          onClick={this.props.onClick}>{this.props.text}</button>
      </div>
    )
  }
}
