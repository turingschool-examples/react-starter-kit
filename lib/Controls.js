import React from 'react';

export default class Controls extends React.Component {
  constructor () {
    super();

    this.state = {
      count: 10
    }

    this.handleCountChange = this.handleCountChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
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

        <button onClick={this.handleBtnClick} >Search</button>
      </div>
    )
  }
}