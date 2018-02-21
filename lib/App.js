import React, { Component } from 'react';
import { retrieveTrivia, categories } from './api.js';
import TriviaList from './TriviaList.js';
import Controls from './Controls.js';

export default class App extends Component {
  constructor () {
    super();
    this.state = {
      triviaList: [],
      limit: 5,
      selectedCategory: ''
    }

    this.filterQuestions = this.filterQuestions.bind(this);
  }

  componentDidMount () {
    retrieveTrivia(7)
    .then(response => response.json())
    .then(triviaQuestions => {
      this.setState({
        triviaList: triviaQuestions.results
      })
    })
    .catch(error => console.log({ error }))
  }

  filterQuestions(filters) {
    this.setState({ 
      limit: filters.limitFilter,
      selectedCategory: filters.categoryFilter
    });
  }

  render () {
    return (
      <div>
        <h1>Trivia!</h1>

        <Controls 
          filterQuestions={this.filterQuestions}
          categories={categories}
          limit={this.state.limit}
        />

        <TriviaList 
          limit={this.state.limit}
          selectedCategory={this.state.selectedCategory}
          questions={this.state.triviaList}
        />
      </div>
    )
  }
}
