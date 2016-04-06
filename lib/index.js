const React = require('react');
const ReactDOM = require('react-dom');

require('./style');

let ideas = [
  { id: 1, title: 'A great idea', body: 'Lorem ipsum…' },
  { id: 2, title: 'A wonderful proposal', body: 'Lorem ipsum…' },
  { id: 3, title: 'A brilliant inspiration', body: 'Lorem ipsum…' },
  { id: 4, title: 'A terrific thought', body: 'Lorem ipsum…' },
];

const IdeaBox = React.createClass({
  render() {
    return (
      <div className="application">
        <h1>Idea Box</h1>
        <IdeaList />
      </div>
    );
  },
});

const IdeaList = React.createClass({
  getInitialState() {
    return { ideas, filterText: '' };
  },

  removeIdeaFromList(id) {
    this.setState({ ideas: ideas.filter(idea => idea.id !== id) });
  },

  createNewIdea({ title, body }) {
    this.setState({ ideas: ideas.concat({ title, body, id: Date.now() }) });
  },

  updateFilterText(newText) {
    this.setState({ filterText: newText });
  },

  render() {
    let { ideas, filterText } = this.state;

    if (this.state.filterText) {
      ideas = ideas.filter(idea => idea.title.includes(filterText));
    }

    const ideaComponents = ideas.map(idea => {
      return <IdeaItem {...idea}
               key={idea.id}
               onRemoval={this.removeIdeaFromList}
             />;
    });

    return (
      <div className="idea-list">
        <h2>Ideas</h2>
        <NewIdeaForm onCreateIdea={this.createNewIdea} />
        <IdeaFilter onChange={this.updateFilterText} />
        {ideaComponents}
      </div>
    );
  },
});

const IdeaItem = React.createClass({
  defaultProps: {
    show: false,
  },

  getInitialState() {
    return { show: this.props.show };
  },

  toggleShowHide() {
    this.setState({ show: !this.state.show });
  },

  removeIdea() {
    this.props.onRemoval(this.props.id);
  },

  render() {
    let ideaInfo;
    if (this.state.show) {
      ideaInfo = (
        <div>
          <p className="idea-body">
            {this.props.body}
          </p>
          <div className="idea-controls">
            <button onClick={this.removeIdea}>Delete</button>
          </div>
        </div>
      );
    }

    return (
      <div className="idea-item">
        <h3>{this.props.title}</h3>
        <div className="idea-hide-show">
          <button onClick={this.toggleShowHide}>
            { this.state.show ? 'Hide' : 'Show' }
          </button>
        </div>
        {ideaInfo}
      </div>
    );
  },
});

const NewIdeaForm = React.createClass({
  getInitialState() {
    return {
      title: '',
      body: '',
    };
  },

  onFieldChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  },

  clearForm() {
    this.setState({ title: '', body: '' });
  },

  createNewIdea(e) {
    e.preventDefault();
    this.props.onCreateIdea(this.state);
    this.clearForm();
  },

  render() {
    return (
      <div className="new-idea-form">
        <h3>New Idea</h3>
        <form onSubmit={this.createNewIdea}>
          <input
            value={this.state.title}
            name="title"
            className="new-idea-form-title"
            placeholder="Title"
            onChange={this.onFieldChange}
          />
          <textarea
            value={this.state.body}
            name="body"
            className="new-idea-form-body"
            placeholder="Body"
            onChange={this.onFieldChange}
          />
          <input
            className="new-idea-form-submit"
            type="submit"
            value="Create New Idea"
          />
        </form>
        <div className="new-idea-preview">
          <h3>{this.state.title}</h3>
          <p>{this.state.body}</p>
        </div>
      </div>
    );
  },
});

const IdeaFilter = React.createClass({
  handleChange(e) {
    this.props.onChange(e.target.value);
  },

  render() {
    return (
      <input
        value={this.props.filterText}
        onChange={this.handleChange}
        className="idea-filter"
        placeholder="Search…"
      />
    );
  },
});

ReactDOM.render(<IdeaBox />, document.querySelector('.container'));
