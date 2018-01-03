import React from 'react';
import TriviaList from './TriviaList.js';
import Controls from './Controls.js';

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
    fetch(`https://opentdb.com/api.php?amount=${count}`)
    .then( response => response.json() )
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