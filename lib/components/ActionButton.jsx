const React = require('react');
const ReactDOM = require('react-dom');

class ActionButton extends React.Component {
  render () {
    return (
      <button className="ActionButton" onClick={this.props.handleClick}>
        <span>{this.props.text}</span>
      </button>
    )
  }
}

ReactDOM.render(<ActionButton text="Guess"/>, document.querySelector('.application'))

module.exports = ActionButton;
