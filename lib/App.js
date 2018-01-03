import React from 'react';
import TriviaList from './TriviaList.js';

export default class App extends React.Component {
  constructor () {
    super();

    this.state = {
      triviaList: []
    }
  }

  componentDidMount () {
    fetch('https://opentdb.com/api.php?amount=10')
    .then( response => response.json() )
    .then( json => this.setState({ triviaList: json.results }) );
  }

  render () {
    return (
      <div>
        App Component!!!!!
        
        <TriviaList list={this.state.triviaList} />
      </div>
    )
  }
}