import React, { Component } from 'react';
import { triviaQuestions, categories } from './api.js';

export default class App extends Component {
  constructor () {
    super();
  }

  render () {
    return (
      <div>
        <h1>Trivia!</h1>
      </div>
    )
  }
}
