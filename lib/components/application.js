import React, { Component } from 'react';

export default class Application extends React.Component {
  constructor() {
    super();
    this.state = {
      currentGuess: "",
      lastGuess: "",
      min: 1,
      max: 100,
      randomNumber: "",
      feedback: "",
      enableButton: false,
      message: ""
    };
    this.generateRandomNumber = this.generateRandomNumber.bind(this);
    this.feedback = this.feedback.bind(this);
    this.guessButtonClick = this.guessButtonClick.bind(this);
}

    generateRandomNumber(){
      let randomNumber = Math.floor(Math.random() * (this.state.max - this.state.min) + this.state.min);
      this.setState ({
        randomNumber: randomNumber
      });
    }

    componentWillMount() {
      this.generateRandomNumber();
    }


    clearInput(){
      this.setState({ currentGuess: "" });
    }

    handleGuess(){
      this.setState({ lastGuess });
    }

    feedback(){
      if(this.state.currentGuess > this.state.randomNumber){
        this.setState({feedback: "Sorry, that guess is too high. Try a lower number."})
      }
      if(this.state.currentGuess < this.state.randomNumber){
        this.setState({feedback: "Sorry, that guess is too low. Try a higher number."})
      }
      if(this.state.currentGuess === this.state.randomNumber){
        this.setState({feedback: "Correct!"})
      }
    }

    guessButtonClick() {
      this.setState({ lastGuess: this.state.currentGuess });
      this.feedback();
      this.clearInput();
    }

    render(){
      return (
        <section>
          <h1 className="last-guess-message">{this.state.message}</h1>
          <h2 className="lastGuess">{this.state.lastGuess}</h2>
          <h2 className="feedback">{this.state.feedback}</h2>
          <input className="userGuess"
                 type="number"
                 placeholder="Enter your guess"
                 value={this.state.currentGuess}
                 onChange={(e) => this.setState({ currentGuess: +e.target.value })} />
          <button
                  disabled={!this.state.currentGuess}
                  className="guessButton"
                  onClick={() => this.guessButtonClick()}>Guess
          </button>
          <button onClick={() => this.clearInput()}
                  disabled={!this.state.currentGuess}
                  className="clearButton">Clear</button>
          <button className="resetButton">Reset</button>
        </section>

      )
    }
};
