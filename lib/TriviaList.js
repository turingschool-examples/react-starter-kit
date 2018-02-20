import React from 'react';
import Trivia from './Trivia.js';

export default function TriviaList (props) {
  return (
    <div>
    {
      props.questions.slice(0, props.limit).map((trivia, index) => {
        return <Trivia key={index} data={trivia} />
      })
    }
    </div>
  )
}