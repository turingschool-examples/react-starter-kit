const React = require('react');
const ReactDOM = require('react-dom');
const MinMax = require('./MinMax');
// const ActionButton = require('./ActionButton');

class Application extends React.Component {
  render () {
    return (
      <MinMax />
    )
  }
}

ReactDOM.render( <Application />, document.querySelector('.application'));
