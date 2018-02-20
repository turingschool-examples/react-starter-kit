import React from 'react';
import Trivia from './Trivia.js';

export default function TriviaList (props) {
  let filteredQuestions = props.questions.filter(question => {
    return question.category === props.selectedCategory;
  }).slice(0, props.limit);
  
  return (
    <div>
    {
      filteredQuestions.map((trivia, index) => {
        return <Trivia key={index} data={trivia} />
      })
    }
    </div>
  )
}