import React, { Component } from 'react';
import SecreteNumber from './SecreteNumber';
// import InputForm from './DisplayGuess';

export default class Application extends Component {
  constructor() {
    super();
  }

  render(){
    return (
      <section className="ApplicationRender">
        <SecreteNumber/>
        // <DisplayGuess />
        // <CreateGuess />
      </section>
    );
  }
}
