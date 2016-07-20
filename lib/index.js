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
            <h1>{ this.props.title }</h1>
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

  updateProperties(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  createIdea(event) {
    event.preventDefault();
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
               onChange={(e) => this.updateProperties(e)}
        />
        <input className="CreateIdea--body"
               name="body"
               placeholder="Idea Body"
               value={this.state.body}
               onChange={(e) => this.updateProperties(e)}
        />
        <input className="CreateIdea--submit"
               type="submit"
               onClick={(e) => this.createIdea(e)}
        />
      </div>
    );
  }
}

const IdeasList = (props) => {
  return (
    <div className="IdeasList">
      {props.ideas.map(idea => <IdeasListItem {...idea} key={idea.id}/>)}
    </div>
  );
};

const IdeasListItem = (props) => {
  return (
    <div className={props.active ? 'IdeasListItem is-active' : 'IdeasListItem'}>
      <h3 className="IdeasListItem--title">{props.title}</h3>
      <div className="IdeasListItem--body">{props.body}</div>
      <div className="IdeasListItem--buttons">
        <button onClick={() => store.select(props.id)}>Select</button>
        <button onClick={() => store.destroy(props.id)}>Destroy</button>
      </div>
    </div>
  );
};

const ActiveIdea = (props) => {
  const idea = props.idea;

  const updateIdea = (event) => {
    const { name, value } = event.target;
    const updatedIdea = Object.assign(idea, { [name]: value });
    store.update(idea.id, updatedIdea);
  };

  if (!idea) {
    return (
      <div className="ActiveIdea">
        <p>Yea, you need to select an idea from the left.</p>
      </div>
    );
  }

  return (
    <div className="ActiveIdea">
      <input className="ActiveIdea--title"
             name="title"
             value={idea.title}
             onChange={updateIdea}
      />
      <textarea className="ActiveIdea--body"
                value={idea.body}
                name="body"
                onChange={updateIdea}
      />
    </div>
  );
};

ReactDOM.render(<IdeaBox title="Idea Box"/>, document.querySelector('.application'));
