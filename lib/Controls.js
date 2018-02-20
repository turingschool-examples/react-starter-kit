import React, { Component } from 'react';

export default class Controls extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <label htmlFor="triviaCount">Enter Number of Questions to Display</label>
        <input 
          id="triviaCount" 
          type="number" 
          value={this.props.limit} 
          onChange={(event) => { 
            this.props.updateLimit(event.target.value)
          }}
        />
      </div>
    )
  }
}