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
      message: "",
    };
}

    generateRandomNumber(){
      let randomNumber = Math.floor(Math.random() * (this.state.max - this.state.min) + this.state.min);
      this.setState ({ randomNumber: randomNumber });
    }

    componentWillMount() {
      this.generateRandomNumber();
    }

    handleReset(){
      this.generateRandomNumber();
      this.setState({ currentGuess: "", lastGuess: "", message: "", min: 1, max: 100, feedback: ""});
    }

    handleOutOfRange(){
      if(this.state.currentGuess > this.state.max){
        this.setState({ feedback: "Out of Range" });
      }
    }

    clearInput(){
      this.setState({ currentGuess: "" });
    }

    handleGuess(){
      this.setState({ lastGuess });
    }

    handleMinGreaterThanMax(){
      if(this.state.min > this.state.max){
        this.setState({ min: 1, feedback: "Your min was higher than your max" });
      }
    }

    handleVictory() {
      this.setState({ min: this.state.min-10, max: this.state.max+10 });
    }

    feedback(){
      if(this.state.currentGuess > this.state.randomNumber){
        this.setState({feedback: "Sorry, that guess is too high. Try a lower number."});
      }
      if(this.state.currentGuess < this.state.randomNumber){
        this.setState({feedback: "Sorry, that guess is too low. Try a higher number."});
      }
      if(this.state.currentGuess === this.state.randomNumber){
        this.setState({feedback: "Correct!"});
        this.handleVictory();
      }
    }

    handleGuessMessage(){
      this.setState({ message: "Your last guess was:" });
    }

    guessButtonClick() {
      this.setState({ lastGuess: this.state.currentGuess });
      this.feedback();
      this.clearInput();
      this.handleOutOfRange();
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
          <p>Maximum</p>
          <input className="minInput"
                 type="number"
                 placeholder="Enter Max"
                 value={this.state.max}
                 onChange={(e) => this.setState({ max: +e.target.value })}/>
          <p>Minimum</p>
          <input className="maxInput"
                 type="number"
                 placeholder="Enter Min"
                 value={this.state.min}
                 onChange={(e) => this.setState({ min: +e.target.value })}/>
          <br />
          <button
                  disabled={!this.state.currentGuess}
                  className="guessButton"
                  onClick={() => {this.guessButtonClick(); this.handleGuessMessage(); this.handleMinGreaterThanMax();}}
                  >Guess
          </button>
          <button onClick={() => this.clearInput()}
                  disabled={!this.state.currentGuess}
                  className="clearButton">Clear</button>
          <button className="resetButton"
                  onClick={() => this.handleReset()}
                  disabled={!this.state.currentGuess && !this.state.feedback}
          >Reset
          </button>
        </section>

      )
    }
};

//How do you call multiple functions in onClick?
