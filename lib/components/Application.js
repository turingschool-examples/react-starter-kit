import React, { Component } from 'react';
import SecretNumber from './SecretNumber';
import CreateGuess from './CreateGuess';

export default class Application extends Component {
  constructor() {
    super();
  }

  render(){
    return (
      <section className="ApplicationRender">
        <SecretNumber/>
        <CreateGuess/>
      </section>
    );
  }
}
