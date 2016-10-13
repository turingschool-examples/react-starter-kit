import React from 'react';
import ReactDOM from 'react-dom';

const App = React.createClass({
  render() {
    return (
      <div>hello world!</div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('react-root')
);
