const React = require('react');
const ReactDOM = require('react-dom');

const myTuttles = [
  { name: 'Regis', id: 1 },
  { name: 'Greg', id: 2 },
  { name: 'Josh Cheek', id: 3 },
  { name: 'Mike Dao is Dead to Me', id: 4 },
];

function getJSON(url, callback) {
  setTimeout(function () {
    callback(myTuttles);
  }, 1000);
}

const Tuttles = React.createClass({
  getInitialState() {
    return { tuttles: [] };
  },

  componentDidMount() {
    getJSON(this.props.endpoint, tuttles => {
      this.setState({ tuttles: tuttles });
    });
  },

  appendTuttle(newTuttle) {
    const listOfTuttles = this.state.tuttles.concat(newTuttle);
    this.setState({ tuttles: listOfTuttles });
  },

  render() {
    if (this.state.tuttles.length === 0) { return <p>I AM LOADING. LEAVE ME ALONG!!!!</p>; }

    const tuttleComponents = this.state.tuttles.map(tuttle => <Tuttle name={tuttle.name} key={tuttle.id}/>);

    return (
      <div>
        <NewTuttleForm addNewTuttle={this.appendTuttle}/>
        <h1>These are my tuttles</h1>
        {tuttleComponents}
      </div>
    );
  }
});

const Tuttle = React.createClass({
  getInitialState() {
    return { active: false }
  },

  toggleState() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  },

  render() {
    return (
      <div className="tuttle" onClick={this.toggleState}>
        <h1>I AM {this.props.name}! FEAR ME.</h1>
        <p>{ this.state.active ? 'Active' : 'Inactive' }</p>
      </div>
    );
  }
});

const NewTuttleForm = React.createClass({
  getInitialState() {
    return { tuttleName: '' };
  },

  handleChange(event) {
    const newName = event.target.value;
    this.setState({ tuttleName: newName });
  },

  handleSubmit(event) {
    event.preventDefault();
    const newTuttle = { name: this.state.tuttleName, id: Date.now() };
    this.props.addNewTuttle(newTuttle);
  },

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.tuttleName}
          type="text"
          placeholder="Name"
          onChange={this.handleChange}
        />
        <input
          type="submit"
          value="CREATE TUTTLE"
        />
        </form>
        <h1>{this.state.tuttleName}</h1>
      </div>
    );
  }
});

ReactDOM.render(<Tuttles endpoint="/api/v1/tuttles.json" />, document.querySelector('.application'));
