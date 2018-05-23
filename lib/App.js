import React, { Component } from 'react';
import { triviaQuestions, categories } from './api.js';
import TriviaList from './TriviaList.js';
import Controls from './Controls.js';

export default class App extends Component {
  constructor () {
    super();

    this.state = {
      triviaQuestions: triviaQuestions || [],
      selectedCategory: 'Geography',
      selectedLimit: 5
    }

    this.filterQuestions = this.filterQuestions.bind(this);
  }

  filterQuestions(filters) {
    this.setState({
      selectedLimit: filters.userInputLimit,
      selectedCategory: filters.userInputCategory
    })
  }

  render () {
    return (
      <div>
        <h1>Trivia!</h1>
        <Controls 
          filterQuestions={this.filterQuestions}
          selectedCategory={this.state.selectedCategory}
          selectedLimit={this.state.selectedLimit}
          categories={categories}
        />
        <TriviaList
          questions={this.state.triviaQuestions}
          selectedCategory={this.state.selectedCategory}
          selectedLimit={this.state.selectedLimit}
        />
      </div>
    )
  }
}