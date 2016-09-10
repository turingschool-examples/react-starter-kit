require('./style');

const React = require('react');
const ReactDOM = require('react-dom');

class Buttons extends React.Component {
  render () {
    return (
      <section className="Buttons">
        <button className="GuessButton">
          <span>Guess</span>
        </button>
        <button className="ClearButton">
          <span>Clear</span>
        </button>
        <button className="ResetButton">
          <span>Restart Game</span>
        </button>
      </section>
    )
  }
}

ReactDOM.render(<Buttons  />, document.querySelector('.application'))
