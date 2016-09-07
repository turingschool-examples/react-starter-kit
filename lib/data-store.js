const EventEmitter = require('events');

// Start out with an empty array of ideas.
let ideas = [];

const store = new EventEmitter();

const storedIdeas = localStorage.getItem('ideas');
if (storedIdeas) { ideas = JSON.parse(storedIdeas); }

// - all() √
// - create() √
// - update() √
// - destroy() √

store.all = () => ideas;

store.create = (idea) => {
  idea.id = Date.now();
  idea.active = false;

  ideas = ideas.concat(idea);
  store.emit('change', ideas);
};

store.destroy = (id) => {
  ideas = ideas.filter(idea => idea.id !== id);
  store.emit('change', ideas);
};

store.update = (id, data) => {
  ideas = ideas.map(idea => {
    if (idea.id === id) { return data; }
    return idea;
  });
  store.emit('change', ideas);
};

store.select = (id) => {
  ideas = ideas.map(idea => {
    idea.active = idea.id === id;
    return idea;
  });
  store.emit('change', ideas);
};

store.on('change', (ideas) => {
  localStorage.setItem('ideas', JSON.stringify(ideas));
});

module.exports = store;
