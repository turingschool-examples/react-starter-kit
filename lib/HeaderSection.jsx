import React from 'react';
import ReactDom from 'react-dom';

export default class HeaderSection extends React.Component {
  render() {
    return(
      <div>
        <p>{this.props.word1} {this.props.word2}</p>
      </div>
    )
  }
}
