import React from 'react';
import Application from './Application';

class GuessMessages extends React.Component {
  constructor(props) {
    super(props);
    // console.log("contruct");
    this.state = {
      message: '',
      userGuess: '',
    };
  }

  displayMessage() {
    console.log(this.props.userNumber, this.props.randomNumber);
    // console.log(this.props.min, this.props.max);

    let message = '';
    if (parseInt(this.props.userNumber) === this.props.randomNumber) {
      message = 'YAYAYAYAYAYAYAYAYYY!'
      this.randomNumberGenerator();
    } else if (this.props.userNumber > this.props.randomNumber && this.props.userNumber <= this.props.max) {
      message = 'Oh hell no, your guess is too high!';
    } else if (this.props.userNumber < this.props.randomNumber && this.props.userNumber >= this.props.min) {
      message = 'Nope. Your guess is too low..TRY AGAIN LOSER!';
    } else if (this.props.userNumber < this.props.min || this.props.userNumber > this.props.max) {
      message = 'YOU\'RE OUTTA RANGE, BRO!';
    } else if (!Number.isInteger(this.props.userNumber)) {
      message = 'You have to guess a number! Don\'t be stupid.'
    }
    this.setState({ message });
    this.setState({ userGuess: this.props.userNumber });
  }

  render() {
    return (
      <div>
      <button className="guess-btn" onClick={() => this.displayMessage()}>Guess</button>
      <h2 className="displayNumber">{this.state.userGuess}</h2>
      <p className="message">{this.state.message}</p>
      </div>
    );
  }
}

module.exports = GuessMessages;
