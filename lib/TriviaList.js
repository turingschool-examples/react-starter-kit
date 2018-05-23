import React from 'react';
import Question from './Question.js';

export default function TriviaList(props) {
  let filteredQuestions = props.questions.filter(question => {
    return question.category === props.selectedCategory;
  }).slice(0, props.selectedLimit);


  return (
    <div>
      { filteredQuestions.map((question, index) => {
          return <Question key={index} question={question} />
        })
      }
    </div>
  );
}