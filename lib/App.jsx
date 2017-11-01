import React from 'react';
import Card from './Card';
import Controls from './Controls';
import apiResponse from './apiResponse';

const cleanData = apiResponse.results.map( (trivia) => {
  return {
    question: trivia.question,
    answer: trivia.correct_answer
  }
} )

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      list: cleanData
    };

    this.filterData = this.filterData.bind(this)
  }

  filterData(filter) {
    const filteredData = cleanData.filter( (trivia) => {
      return trivia.question.toLowerCase().includes( filter );
    } );

    this.setState({
      list: filteredData
    })
  }

  render() {
    return (
      <div>
        <h1 className="title">App Title</h1>

        <Controls filterFunction={this.filterData} tempProp="asdf"/>
        
        {
          this.state.list.map( (trivia, index) => {
            return (
              <Card 
                key={index} 
                question={trivia.question} 
                answer={trivia.answer}
              />
            );
          } )
        }
      </div>
    )
  }
}
