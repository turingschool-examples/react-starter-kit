import React from 'react';
import api from './api.js';

export default class Controls extends React.Component {
  constructor () {
    super();

    this.state = {
      count: 10,
      categories: []
    }

    this.handleCountChange = this.handleCountChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
  }

  componentDidMount () {
    this.getCategories();
  }

  getCategories () {
    api.getCategories()
    .then( json => this.setState({ categories: json.trivia_categories }) );
  }

  handleCountChange (e) {
    this.setState({
      count: e.target.value
    })
  }

  handleBtnClick () {
    this.props.getTrivia(this.state.count);
  }

  render () {
    return (
      <div>
        <label htmlFor="triviaCount" >Enter Number of Trivia</label>
        <input 
          id="triviaCount" 
          type="number" 
          value={this.state.count} 
          onChange={this.handleCountChange}
        />

        <select>
          {
            this.state.categories.map( category => <option> { category.name } </option> )
          }
        </select>

        <button onClick={this.handleBtnClick} >Search</button>
      </div>
    )
  }
}