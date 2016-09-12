import React, { Component } from 'react';
// import DisplayGuess from './DisplayGuess';

export default class CreateGuess extends Component {
  constructor(){
    super();
      this.state = {
      guess: '',
    };
  }

  createGuess(e) {
    e.preventDefault();

    const { guess } = this.state;

    this.setState({ guess: ''});
  }

  render() {
    return(
      <form className="CreateGoal" onSubmit={this.createGuess.bind(this)>
        // <DisplayGuess />
        <input
          placeholder="Guess"
          value={this.state.guess}
          onChange={(e) => this.setState(
          { guess: e.target.value })}
        />
        <input type="submit" />
      </form>
    )
  }
}

// onSubmit={this.createGoal.bind(this)}
