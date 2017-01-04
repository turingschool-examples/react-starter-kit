import React, { Component } from 'react';
import GuessMessages from './GuessMessages';
import ResetBtn from './ResetBtn';

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      randomNumber: null,
      min: 1,
      max: 100,
      userNumber: '',
      message: '',
      userGuess: '',
      resetDisabled: false,
      clearDisabled: false,
    };
  }

  componentDidMount() {
    this.randomNumberGenerator();
  }

  randomNumberGenerator() {
    this.setState({ randomNumber: Math.floor((Math.random()
     * this.state.max - this.state.min) + this.state.min) });
  }

  clearGuess() {
    this.setState({ userNumber: '' });
    this.setState({ clearDisabled: true });
  }

  resetGame() {
    this.setState({ userGuess: '' });
    this.setState({ message: '' });
    this.setState({ resetDisabled: true });
    this.clearGuess();
  }

  render() {
    return (
<div id="application">
  <h1>Number Guesser</h1>
  <p>Your last guess was...</p>
  <input
    className="guess-input"
    value={ this.state.userNumber }
    onChange={ (e) =>
    this.setState({ userNumber: e.target.value, clearDisabled: false, resetDisabled: false }) }
  />
  <button
    className="clear-btn"
    disabled={this.state.clearDisabled}
    onClick={() => this.clearGuess()}
  >Clear</button>
  <ResetBtn
    resetDisabled={this.state.resetDisabled}
    resetGame={this.resetGame.bind(this)}
  />
  <GuessMessages
   min={this.state.min}
   max={this.state.max}
   userNumber={this.state.userNumber}
   message={this.state.message}
   randomNumber={this.state.randomNumber}
  />
</div>
   );
  }
}
