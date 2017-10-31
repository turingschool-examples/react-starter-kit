import React from 'react';
import './Card.css';

export default class Card extends React.Component {
  constructor (props) {
    super();

    this.state = {
      showQuestion: true
    };

    this.toggleQA = this.toggleQA.bind(this);
  }

  toggleQA() {
    console.log('click');
    this.setState({
      showQuestion: !this.state.showQuestion
    })
  }

  render () {
    return (
      <div className="card" onClick={ this.toggleQA } >
        { 
          this.state.showQuestion && 
          <div> 
            Question: {this.props.question} 
          </div>
        }

        {
          !this.state.showQuestion && 
          <div className="answer">
            Answer: {this.props.answer}
          </div>
        }
      </div>
    )
  }
}