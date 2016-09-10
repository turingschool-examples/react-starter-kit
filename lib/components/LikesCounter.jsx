const React = require('react');
const ReactDOM = require('react-dom');
const ActionButton = require('./ActionButton');

class LikesCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.initialCount
      };
  }

  addToLikesCount (num) {
    this.setState({count: this.state.count + num});
  }

  render () {
    return (
      <div className="LikesCounter">
        <h3>Likes: {this.state.count}</h3>
        <div className="ActionButtons">
          <ActionButton text="Like" handleClick={this.addToLikesCount.bind(this, 1)} />
          <ActionButton text="Dislike!" handleClick={this.addToLikesCount.bind(this, -1)} />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<LikesCounter initialCount={0} />, document.querySelector('.application'))

// ReactDOM.render(<ActionButton text="Guess"/>, document.querySelector('.application'))

module.exports = LikesCounter;
