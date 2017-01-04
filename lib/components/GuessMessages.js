import React from 'react';

class GuessMessages extends React.Component {
  constructor({ userNumber, randomNumber, message}) {
    super({ userNumber, randomNumber, message});
    this.state= { userNumber: '' }
    this.state= { randomNumber: null }
    this.state= { message: '' }
  render() {
  displayMessage() {
    console.log(this.state.randomNumber)
    let message = '';
      if (parseInt(this.state.userNumber) === this.state.randomNumber) {
      message = 'YAYAYAYAYAYAYAYAYYY!';
    } else if (this.state.userNumber > this.state.randomNumber && this.state.userNumber < this.state.max) {
      message = 'Oh hell no, your guess is too high!';
    } else if (this.state.userNumber < this.state.randomNumber && this.state.userNumber > this.state.min) {
      message = 'Nope. Your guess is too low..TRY AGAIN LOSER!';
    } else if (this.state.userNumber < this.state.min || this.state.userNumber > this.state.max) {
      message = 'YOU\'RE OUTTA RANGE, BRO!';
    } else if (!Number.isInteger(this.state.userNumber)) {
      message = 'You have to guess a number! Don\'t be stupid.'
    }
    this.setState({ message });
    this.setState({ userGuess: this.state.userNumber });
    }

  return(
    <h2 className="displayNumber">{this.state.userGuess}</h2>
    <p className="message">{this.state.message}</p>
  )
  }
};

module.exports = GuessMessages;
