import React from 'react';
import './Card.css';

export default class Card extends React.Component {
  constructor () {
    super();

    this.state = {};
  }

  render () {
    return (
      <div className="card" >Card Component</div>
    )
  }
}