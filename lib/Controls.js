import React, { Component } from 'react';

export default class Controls extends Component {
  constructor(props) {
    super();

    this.state = {
      userInputLimit: props.selectedLimit,
      userInputCategory: props.selectedCategory
    }
  }

  render() {
    return (
      <div>
        <input 
          type="number"
          value={this.state.userInputLimit}
          onChange={(event) => {
            this.setState({
              userInputLimit: event.target.value
            })
          }}
        />

        <select
          value={this.state.userInputCategory}
          onChange={(event) => {
            this.setState({
              userInputCategory: event.target.value
            })
          }}
        >

          { this.props.categories.map((category, index) => {
              return <option key={index} value={category.name}>{category.name}</option>
            })
          }

        </select>

        <button onClick={(event) => {
          this.props.filterQuestions(this.state);
        }}>Filter Questions</button>

      </div>
    );
  }
}