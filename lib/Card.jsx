import React from 'react';
import './Card.css';

export default class Card extends React.Component {
  constructor (props) {
    super();
    console.log(arguments);

    this.state = {};
  }

  render () {
    return (
      <div className="card" >
        <div> 
          Question: {this.props.question} 
        </div>
        
        <div className="answer">
          Answer: {this.props.answer}
        </div>
      </div>
    )
  }
}