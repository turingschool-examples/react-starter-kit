import React from 'react';
import Trivia from './Trivia.js';

export default function TriviaList (props) {
  return (
    <div>
    {
      props.list.map( (trivia, index) => <Trivia key={index} data={trivia} bullshit='asdf' /> )
    }
    </div>
  )
}
