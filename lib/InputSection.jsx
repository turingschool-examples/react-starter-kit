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
    let number = e.target.value
    this.setState({ input: number})
    console.log(number)
  }

  handleGuessChange() {
    console.log('click?')
  }

  handleClearChange() {
    console.log('clear?')
  }

  handleResetChange() {
    console.log('reset?')
  }

  render() {
    return(
      <div>
        <input
          className='input-feild'
          type='number'
          placeholder='Enter Your Guess'
          onChange={this.handleChange.bind(this)}></input>
        <Button className='guess-button' text='Guess' onClick={this.handleGuessChange.bind(this)}/>
        <Button className='clear-button' text='Clear' onClick={this.handleClearChange.bind(this)}/>
        <Button className='reset-button' text='Reset' onClick={this.handleResetChange.bind(this)}/>
      </div>
    )
  }
}
