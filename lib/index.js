const React = require('react');
const ReactDOM = require('react-dom');
const store = require('./data-store');

require('./reset.css');
require('./style.scss');

class IdeaBox extends React.Component {
  constructor() {
    super();
    this.state = {
      ideas: store.all(),
    };
  }

  componentDidMount() {
    store.on('change', ideas => {
      this.setState({ ideas });
    });
  }

  render() {
    const activeIdea = this.state.ideas.find(idea => idea.active);

    return (
      <div className="IdeaBox">
        <section className="sidebar">
          <header>
            <h1>{this.props.title}</h1>
            <CreateIdea/>
            <IdeasList ideas={this.state.ideas}/>
          </header>
        </section>
        <section className="main-content">
          <ActiveIdea idea={activeIdea}/>
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
      body: '',
    };
  }

  updateProperties(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  createIdea(e) {
    e.preventDefault();
    store.create(this.state);
    this.setState({ title: '', body: '' });
  }

  render() {
    return (
      <div className="CreateIdea">
        <input className="CreateIdea-title"
              name="title"
              placeholder="Title"
              value={this.state.title}
              onChange={(e) => this.updateProperties(e)}
        />
        <textarea className="CreateIdea-body"
                  name="body"
                  placeholder="Body"
                  value={this.state.body}
                  onChange={(e) => this.updateProperties(e)}
        />
        <input className="CreateIdea-submit"
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
      {ideas.map(idea => <IdeasListItem {...idea} key={idea.id}/>)}
    </div>
  );
};

const IdeasListItem = ({ id, title, body, active }) => {
  return (
    <div className={active ? 'IdeasListItem is-active' : 'IdeasListItem'}>
      <h3 className="IdeasListItem-title">{title}</h3>
      <div className="IdeasListItem-body">{body}</div>
      <div className="IdeasListItem-buttons">
        <button onClick={() => store.select(id)}>Select</button>
        <button onClick={() => store.destroy(id)}>Destroy</button>
      </div>
    </div>
  );
};

const ActiveIdea = ({ idea }) => {
  if (!idea) { return <p className="ActiveIdea">Please select an idea.</p>; }

  const updateIdea = (e) => {
    const { name, value } = e.target;
    store.update(idea.id, Object.assign(idea, { [name]: value }));
  };

  return (
    <div className="ActiveIdea">
      <input className="ActiveIdea-title"
             name="title"
             value={idea.title}
             onChange={updateIdea}
      />
      <textarea className="ActiveIdea-body"
                name="body"
                value={idea.body}
                onChange={updateIdea}
      />
    </div>
  )
}

ReactDOM.render(<IdeaBox title="Inspiration Bin"/>, document.querySelector('.application'));
