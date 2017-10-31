import React from 'react';

export default class Controls extends React.Component {
  constructor () {
    super();

    this.state = {
      inputVal: ''
    };
  }

  handleInputChange(event) {
    this.setState({
      inputVal: event.target.value
    })
  }

  render () {
    return (
      <div>
        <input 
          type="text" 
          value={this.state.inputVal}
          onChange={this.handleInputChange.bind(this)}
          placeholder="Search Questions..." />

        <button>Search</button>
      </div>
    )
  }
}