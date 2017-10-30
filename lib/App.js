import React from 'react';
import Greeting from './Greeting.js';
import EvilDeedsCounter from './EvilDeedsCounter.js';
import EvilDeedsToDo from './EvilDeedsToDo.js';

export default function App () {
  return (
    <div>
      <Greeting name='Ursula' />
      <EvilDeedsCounter />
      <EvilDeedsToDo />
    </div>
  )
}
