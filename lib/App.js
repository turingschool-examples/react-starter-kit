import React from 'react';

// export default function App () {
export default class App extends React.Component {
  constructor () {
    super();

    this.state = {
      triviaList: []
    }
  }

  componentDidMount () {
    fetch('https://opentdb.com/api.php?amount=10')
    .then( response => response.json() )
    .then( json => console.log(json) );
  }

  render () {
    return (
      <div>
        App Component!!!!!
      </div>
    )
  }
}