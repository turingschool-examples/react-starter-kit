import React from 'react';
import Card from './Card';
import fakeData from './fakeData';

export default function App () {
  return (
    <div>
      <h1>App Title</h1>

      {
        fakeData.map( (trivia, index) => {
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
