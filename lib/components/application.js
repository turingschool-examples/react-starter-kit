import React, { Component } from 'react';

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      currentGuess: "",
      lastGuess: "",
      min: 1,
      max: 100,
      randomNumber: "",
      feedback: "",
      enableButton: false
    };
}

    generateRandomNumber(){
      var randomNumber = Math.floor(Math.random() * (this.state.max - this.state.min) + this.state.min);
      this.setState ({
        randomNumber: randomNumber
      });
    }

    componentWillMount() {
      this.generateRandomNumber();
    }

    render(){
      return (
        <section>
          <h1 className="last-guess-message">Your last guess was</h1>
          {/* <h1>{this.state.randomNumber}</h1> */}
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
