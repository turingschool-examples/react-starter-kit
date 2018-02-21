import React, { Component } from 'react';
import { triviaQuestions, categories } from './api.js';
import TriviaList from './TriviaList.js';
import Controls from './Controls.js';

export default class App extends Component {
  constructor () {
    super();
    this.state = {
      triviaList: triviaQuestions || [],
      limit: 5
    }

    this.filterQuestions = this.filterQuestions.bind(this);
  }

  filterQuestions(filters) {
    this.setState({ 
      limit: filters.limitFilter
    });
  }

  render () {
    return (
      <div>
        <h1>Trivia!</h1>

        <Controls 
          filterQuestions={this.filterQuestions}
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