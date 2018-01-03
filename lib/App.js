import React from 'react';
import TriviaList from './TriviaList.js';

export default class App extends React.Component {
  constructor () {
    super();

    this.state = {
      triviaList: [],
      count: 10
    }

    this.handleCountChange = this.handleCountChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
  }

  componentDidMount () {
    this.getTrivia();
  }

  handleCountChange (e) {
    this.setState({
      count: e.target.value
    })
  }

  handleBtnClick () {
    this.getTrivia();
  }

  getTrivia () {
    fetch(`https://opentdb.com/api.php?amount=${this.state.count}`)
    .then( response => response.json() )
    .then( json => this.setState({ triviaList: json.results }) );
  }

  render () {
    return (
      <div>
        <h1>Trivia!</h1>

        <div>
          <label htmlFor="triviaCount" >Enter Number of Trivia</label>
          <input 
            id="triviaCount" 
            type="number" 
            value={this.state.count} 
            onChange={this.handleCountChange}
          />

          <button onClick={this.handleBtnClick} >Search</button>
        </div>
        
        <TriviaList list={this.state.triviaList} />
      </div>
    )
  }
}