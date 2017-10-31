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

    this.state = {};
  }

  filterData(filter) {
    const filteredData = cleanData.filter( (trivia) => {
      return trivia.question.includes( filter );
    } );

    return filteredData;
  }

  render() {
    return (
      <div>
        <h1>App Title</h1>

        <Controls />
        
        {
          cleanData.map( (trivia, index) => {
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
