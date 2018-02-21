import React, { Component } from 'react';

export default class Controls extends Component {
  constructor (props) {
    super(props);
    this.state = {
      limitFilter: props.limit,
      categoryFilter: ''
    }
  }

  render () {
    return (
      <div>
        <label htmlFor="triviaCount">Enter Number of Questions to Display</label>
        <input 
          id="triviaCount" 
          type="number" 
          value={this.state.limitFilter} 
          onChange={(event) => { 
            this.setState({ limitFilter: event.target.value })
          }}
        />

        <select 
          value={this.state.categoryFilter}
          onChange={(event) => { 
            this.setState({ categoryFilter: event.target.value
          })
        }}>
          {this.props.categories.map(category => <option key={category.id} value={category.name}>{category.name}</option>)}
        </select>

        <button 
          onClick={(event) => {
            this.props.filterQuestions(this.state)
        }}>Search</button>
      </div>
    )
  }
}