const React = require('react');
const ReactDOM = require('react-dom');

const store = require('./data-store');
require('./style.scss');

class Ideabox extends React.Component {
  constructor() {
    super();
    this.state = {
      ideas: store.all(),
    };
  }

  componentDidMount() {
    store.on('change', (ideas) => {
      this.setState({ ideas });
    });
  }

  render() {
    console.log(this.state.ideas);
    const activeIdea = this.state.ideas.find(idea => idea.active);

    return (
      <div className="IdeaBox">
        <section className="sidebar">
          <header>
            <h1>{this.props.title}</h1>
            <CreateIdea />
            <IdeasList ideas={this.state.ideas} />
          </header>
        </section>
        <section className="main-content">
          {activeIdea ? <ActiveIdea {...activeIdea}/> : <p>Yo. Pick an idea.</p>}
        </section>
      </div>
    );
  }
}

class CreateIdea extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      body: ''
    };
  }

  inputWasChanged(e) {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });
  }

  createIdea(e) {
    e.preventDefault();
    store.create(this.state);

    this.setState({
      title: '',
      body: '',
    });
  }

  render() {
    return (
      <div className="CreateIdea">
        <input className="CreateIdea--title"
               name="title"
               placeholder="Idea Title"
               value={this.state.title}
               onChange={this.inputWasChanged.bind(this)}
        />
        <input className="CreateIdea--body"
               name="body"
               placeholder="Idea Body"
               value={this.state.body}
               onChange={(e) => this.inputWasChanged(e)}
        />
        <input className="CreateIdea--submit"
               type="submit"
               onClick={(e) => this.createIdea(e)}
        />
      </div>
    );
  }
}

const IdeasList = ({ ideas }) => {
  return (
    <div className="IdeasList">
      {ideas.map(idea => <IdeasListItem {...idea} key={idea.id} /> )}
    </div>
  );
};

const IdeasListItem = ({ title, body, id }) => {
  return (
    <div className="IdeasListItem">
      <h4 className="IdeasListItem--title">{title}</h4>
      <div className="IdeasListItem--body">{body}</div>
      <div className="IdeasListItem--buttons">
        <button onClick={() => store.select(id)}>Select</button>
        <button onClick={() => store.destroy(id)}>Destroy</button>
      </div>
    </div>
  );
};

const ActiveIdea = (idea) => {
  const updateIdea = (e) => {
    // const name = e.target.name;
    // const value = e.target.value;

    const { name, value } = e.target;
    const updatedIdea = Object.assign(idea, { [name]: value });
    store.update(idea.id, updatedIdea);
  };

  return (
    <div className="ActiveIdea">
      <input className="ActiveIdea--title"
             name="title"
             value={idea.title}
             onChange={updateIdea}
      />
      <textarea className="ActiveIdea--body"
               name="body"
               value={idea.body}
               onChange={updateIdea}
      />
    </div>
  )
}

ReactDOM.render(<Ideabox title="Ideabox" />, document.querySelector('.application'));
