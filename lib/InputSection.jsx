import React from 'react';
import ReactDom from 'react-dom';
import Button from './Button.jsx';

export default class InputSection extends React.Component {
  constructor() {
    super()
    this.state = {
      input: '',
    }
  }

  handleChange(e) {
    let value = e.target.value
    this.setState({ input: value})
  }

  render() {
    return(
      <div>
        <input
          className='input-feild'
          placeholder='Enter Your Guess'
          onChange={this.handleChange.bind(this)}></input>
        <Button />
      </div>
    )
  }
}
