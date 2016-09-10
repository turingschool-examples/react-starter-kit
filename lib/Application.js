import React, { Component } from 'react'

class Application extends Component {
  constructor() {
    super();
    this.state = {
      userGuess: '',
      guessInput: '',
      secretNUmber: '',
      minNum: 0,
      maxNum: 100,
      status: 'Hurry Up'
    };
    this.userGuessInput = this.userGuessInput.bind(this);
    this.handleRenderMessage = this.handleRenderMessage.bind(this);
    this.handleClearInput = this.handleClearInput.bind(this);
  }
  // anything you need to render something to the DOM, you have to bind first
  // react will complain if you don't add HANDLE to any function that renders to the DOM

  componentWillMount() {
    this.generateRandomNumber();
  }

  generateRandomNumber() {
    const { minNum, maxNum } = this.state;
    const randomNumber = Math.floor(Math.random() * (maxNum-minNum) + minNum);
    this.setState({ secretNUmber: randomNumber });
  }

  userGuessInput(event) {
    const guess = event.target.value;
    this.setState({ userGuess: guess, guessInput: guess});
  }

  handleRenderMessage() {
    const { userGuess, secretNUmber } = this.state;
    this.setState({guessInput: ''});
    if(+userGuess === secretNUmber) {
      return this.setState({ status: 'Correct!'});
    }
    if(+userGuess > secretNUmber) {
      return this.setState({ status: 'Too high'});
    }
    if(+userGuess < secretNUmber) {
      return this.setState({ status: 'Too low'});
    }
  }

  handleClearInput() {
    this.setState({guessInput: ''});
  }


  render() {
    return(
      <div className="displaying-area">
        <h2 className="display-message">{this.state.status}</h2>
        <h2>Random Number is: {this.state.secretNUmber} </h2>
        <h2>You guessed: {this.state.userGuess} </h2>
        <input
          type="number"
          className="user-input-field"
          placeholder="Guess a Number"
          value={this.state.guessInput}
          onChange={this.userGuessInput}
        />
        <button className="submit-button"
          onClick={this.handleRenderMessage}
          >Submit</button>
        <button className="clear-button"
          onClick={this.handleClearInput}
          >Clear</button>
        <button className="reset-button">Reset Game</button>
      </div>
    )
  }


}

export default Application;
