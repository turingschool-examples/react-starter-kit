import React, { Component } from 'react';
import SecreteNumber from './SecreteNumber';

export default class Application extends Component {
  constructor() {
    super();
  }

  render(){
    return (
      <section className="ApplicationRender">
        <SecreteNumber/>
      </section>
    );
  }
}
