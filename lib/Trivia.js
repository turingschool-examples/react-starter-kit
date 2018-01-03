import React from 'react';

export default class Trivia extends React.Component {
  
  render () {
    return <h1> { this.props.data.question } </h1>
  }
}