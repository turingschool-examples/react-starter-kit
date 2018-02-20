import React, { Component } from 'react';
import { triviaQuestions } from './api.js';
import TriviaList from './TriviaList.js';
import Controls from './Controls.js';

export default class App extends Component {
  constructor () {
    super();
    this.state = {
      triviaList: triviaQuestions || [],
      limit: 10
    }

    this.updateLimit = this.updateLimit.bind(this);
  }

  updateLimit(limit) {
    this.setState({ limit });
  }

  render () {
    return (
      <div>
        <h1>Trivia!</h1>

        <Controls 
          updateLimit={this.updateLimit}
          limit={this.state.limit}
        />

        <TriviaList 
          limit={this.state.limit}
          questions={this.state.triviaList}
        />
      </div>
    )
  }
}
