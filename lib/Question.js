import React, { Component } from 'react';

export default class Question extends Component {
  constructor() {
    super();

    this.state = {
      showAnswer: false
    }

    this.toggleAnswer = this.toggleAnswer.bind(this);
  }

  toggleAnswer() {
    this.setState({
      showAnswer: !this.state.showAnswer
    });
  }

  render() {
    return (
      <div onClick={this.toggleAnswer}>
        <h4>
          { this.state.showAnswer ? ' - ' : ' + ' }
          { this.props.question.title }
          { this.state.showAnswer && <p>{this.props.question.correct_answer}</p>}
        </h4>

      </div>
    );
  }
}