import React, { Component } from 'react';
import GuessMessages from './GuessMessages';

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
    this.setState({ randomNumber: this.randomNumberGenerator() });
  }

  randomNumberGenerator() {
    return Math.floor((Math.random() * this.state.max - this.state.min) + this.state.min);
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
  <input className="guess-input" value={ this.state.userNumber } onChange={ (e) => this.setState({ userNumber: e.target.value, clearDisabled: false, resetDisabled: false }) }/>
  <button className="guess-btn" onClick={() => this.displayMessage()}>Guess</button>
  <button className="clear-btn" disabled={this.state.clearDisabled} onClick={() => this.clearGuess()}>Clear</button>
  <button className="reset-btn" disabled={this.state.resetDisabled} onClick={() => this.resetGame()}>Reset Game</button>
  <GuessMessages userNumber={this.state.userNumber} message={this.state.message} randomNumber={this.state.randomNumber} />
  </div>
   );
  }
}
