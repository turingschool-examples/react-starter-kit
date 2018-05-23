import React from 'react';
import Question from './Question.js';

export default function TriviaList(props) {
  return (
    <div>
      { props.questions.map((question, index) => {
          return <Question key={index} question={question} />
        })
      }
    </div>
  );
}