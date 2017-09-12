import React from 'react';

export default class Controls extends React.Component {
  constructor () {
    super();
    this.state = {
      searchInput: ''
    }
  }

  render() {
    return (
      <div>
        <input
          type='text'
          value={this.state.searchInput}
          onChange={ (event) => {
              this.setState({ searchInput: event.target.value })
            }
          }
        />
      </div>
    )
  }
}
