import React, { Component } from 'react';
import Header from './header';

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      currentGuess: "",
      lastGuess: "",
      min: "",
      max: "",
      randomNumber: "",
      feedback: ""
    };
}

    render(){
      return (
        <section>
          <h1 className="last-guess-message">Your last guess was</h1>
          <h2 className="lastGuess">{this.state.lastGuess}</h2>
          <h3 className="feedback">{this.state.feeback}</h3>
          <input className="userGuess" type="number" placeholder="Enter your guess"></input>
          <button className="guessButton">Guess</button>
          <button className="clearButton">Clear</button>
          <button className="resetButton">Reset</button>
        </section>

      )
    }
};
