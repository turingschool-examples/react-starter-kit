// make a new component for controls
import React from 'react';

export default class Controls extends React.Component {
  constructor (props) {
    super();
    this.state = { input: '' }
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    })
  }

  handleButtonClick() {
    this.props.handleBtnClick(this.state.input)
    this.setState({
      input: ''
    });
  }

  render() {
    return (
      <div>
        <input
          type='text'
          value={this.state.input}
          onChange={this.handleChange.bind(this)}
          onKeyDown={handleKeyPress.bind(this)} />

        {
          this.state.input &&
          <button onClick={this.handleButtonClick.bind(this)} >
            Add Item
          </button>
        }
      </div>
    )
  }
}
