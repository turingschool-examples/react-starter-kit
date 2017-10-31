import React from 'react';
import Card from './Card';
import apiResponse from './apiResponse';

export default function App () {
  const cleanData = apiResponse.results.map( (trivia) => {
    return {
      question: trivia.question,
      answer: trivia.correct_answer
    }
  } )


  return (
    <div>
      <h1>App Title</h1>

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
