import React, { Component } from 'react';

export default class EvilDeedsCounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <div>
        <h2>Evil Deeds Counter</h2>
        <h2>{this.props.count}</h2>
        <button onClick={() => this.setState({ count: this.state.count += 1 })}>
          +1
        </button>
      </div>
    )
  }
}
