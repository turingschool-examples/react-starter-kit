import React, { Component } from 'react'

class Application extends Component {
  constructor() {
    super();
    this.state = {
      userGuess: '',
      guessInput: '',
      secretNUmber: '',
      minNum: 1,
      maxNum: 100,
      status: 'Please guess a numbero'
    };
    this.userGuessInput = this.userGuessInput.bind(this);
    this.handleRenderMessage = this.handleRenderMessage.bind(this);
    this.handleClearInput = this.handleClearInput.bind(this);
    this.handleMinRange = this.handleMinRange.bind(this);
    this.handleMaxRange = this.handleMaxRange.bind(this);
    this.handleResetButton = this.handleResetButton.bind(this);
    this.generateRandomNumber = this.generateRandomNumber.bind(this);
  }
  // anytime you need to render something to the DOM, you have to bind first
  // react will complain if you don't add HANDLE to any function that renders to the DOM

  componentWillMount() {
    this.generateRandomNumber();
  }

  handleResetButton() {
    this.handleClearInput();
    this.setState({ minNum: 1, maxNum: 100, status: 'Please guess a number' });
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

  handleMinRange(event) {
    const minRangeInput = event.target.value;
    this.setState({ minNum: +minRangeInput});
  }

  handleMaxRange(event) {
    const maxRangeInput = event.target.value;
    this.setState({ maxNum: +maxRangeInput});
  }

  handleAlterRange() {
    const { minNum, maxNum } = this.state;
    this.setState({maxNum: maxNum + 10, minNum: minNum - 10});
  }

  handleWin() {
    const { userGuess, secretNUmber } = this.state;
    if(+userGuess === secretNUmber) {
      this.handleAlterRange();
      this.generateRandomNumber();
      this.setState({ status: 'Correct, now guess another number'});
    }
  }

  handleRenderMessage() {
    const { userGuess, secretNUmber, minNum, maxNum } = this.state;
    this.setState({guessInput: ''});
    if(+userGuess > maxNum || +userGuess < minNum) {
      return this.setState({ status: 'Please guess in between ' + minNum + ' and ' + maxNum});
    }
    if(+userGuess === secretNUmber) {
      return this.handleWin();
      // return this.setState({ status: 'Correct!'});
    }
    if(+userGuess > secretNUmber) {
      return this.setState({ status: 'Too high'});
    }
    if(+userGuess < secretNUmber) {
      return this.setState({ status: 'Too low'});
    }
    if(isNaN(+userGuess)) {
      return this.setState({ status: 'Sorry, your guess is not a number'});
    }
  }

  handleClearInput() {
    this.setState({guessInput: ''});
    // this.setState({minRangeInput: ''});
    // this.setState({maxRangeInput: ''});
  }



  render() {
    return(
      <div className="displaying-area">
        <h2 className="display-message">{this.state.status}</h2>
        <h2>Random Number is: {this.state.secretNUmber} </h2>
        <h2>You guessed: {this.state.userGuess} </h2>
        <input
          type="text"
          className="user-input-field"
          placeholder="Guess a Number"
          value={this.state.guessInput}
          onChange={this.userGuessInput}
        />
        <button
          className="submit-button"
          onClick={this.handleRenderMessage}>
          Submit
        </button>
        <button
          className="clear-button"
          // disabled={!this.state.inputGuess}
          onClick={this.handleClearInput}>
          Clear
          </button>
        <button
        // disabled={!this.state.inputGuess}>
          className="reset-button"
          onClick={this.handleResetButton}>
          Reset Game
          </button>
        <h4>Set Min Range</h4>
        <input
          type="number"
          className="InputMinRange"
          value={this.state.minRangeInput}
          onChange={this.handleMinRange}
        />
        <h4>Set Max Range</h4>
        <input
        type="number"
        className="InputMaxRange"
        value={this.state.maxRangeInput}
        onChange={this.handleMaxRange}
        />
        <button
          onClick={this.generateRandomNumber}>
          Set Range
        </button>

      </div>
    )
  }


}

export default Application;
