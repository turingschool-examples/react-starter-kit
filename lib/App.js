import React from 'react';
import TriviaList from './TriviaList.js';
import Controls from './Controls.js';

import api from './api.js';

export default class App extends React.Component {
  constructor () {
    super();

    this.state = {
      triviaList: []
    }

    this.getTrivia = this.getTrivia.bind(this);
  }

  componentDidMount () {
    this.getTrivia(10);
  }

  getTrivia (count) {
    api.getTrivia(count)
    .then( json => this.setState({ triviaList: json.results }) );
  }

  render () {
    return (
      <div>
        <h1>Trivia!</h1>

        <Controls getTrivia={this.getTrivia} />
        
        <TriviaList list={this.state.triviaList} />
      </div>
    )
  }
}