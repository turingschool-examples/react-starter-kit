import React from 'react';

export default class Trivia extends React.Component {

  constructor () {
    super();

    this.state = {
      showAnswer: false
    }

    this.toggleAnswer = this.toggleAnswer.bind(this);
  }

  toggleAnswer () {
    this.setState({
      showAnswer: !this.state.showAnswer
    });
  }

  render () {
    return (
      <div> 

        <h4 onClick={ this.toggleAnswer }> 

          {
            this.state.showAnswer ? ' - ' : ' + '
          }

          { this.props.data.question } 
          
        </h4>

        {
          this.state.showAnswer &&
          <span> { this.props.data.correct_answer } </span>
        }
        
      </div>
    )

  }
}