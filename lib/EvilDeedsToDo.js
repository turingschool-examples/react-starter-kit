import React, { Component } from 'react';

export default class EvilDeedsToDo extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      toDoList: ['poison a bunch of apples']
    }
  }

  render() {
    return (
      <div>
        <h2>Evil Deeds To Do:</h2>
        <input value={this.state.value}
               onChange={(event) => this.setState({ value: event.target.value })}
        />
        <button onClick={() => {
          const updatedArray = this.state.toDoList;
          updatedArray.push(this.state.value);
          this.setState({ toDoList: updatedArray, value: '' });
        }}>
          Submit
        </button>
        <ul>
          { this.state.toDoList.map((toDo, index) => <li key={index}>{toDo}</li>) }
        </ul>
      </div>
    )
  }
}
