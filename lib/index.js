const React = require('react');
const ReactDOM = require('react-dom');

const ideas = [
  { id: 1, title: 'A great idea', body: 'Lorem ipsum…' },
  { id: 2, title: 'A wonderful proposal', body: 'Lorem ipsum…' },
  { id: 3, title: 'A brilliant inspiration', body: 'Lorem ipsum…' },
  { id: 4, title: 'A terrific thought', body: 'Lorem ipsum…' },
];

const IdeaBox = React.createClass({
  render() {
    return (
      <div>
        <h1>Idea Box</h1>
      </div>
    );
  },
});

ReactDOM.render(<IdeaBox ideas={ideas} />, document.querySelector('.container'));
