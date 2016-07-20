const EventEmitter = require('events');

// Start out with an empty array to store ideas.
let ideas = [];

const store = new EventEmitter();

const storedIdeas = localStorage.getItem('ideas');
if (storedIdeas) { ideas = JSON.parse(storedIdeas); }

// Some methods we should probably implement:
// - all()
// - create()
// - update()
// - destroy()

store.all = () => ideas.concat([]);

store.create = (idea) => {
  idea.id = Date.now();
  idea.active = false;
  ideas = ideas.concat(idea);
  store.emit('change', ideas);
};

store.update = (id, data) => {
  debugger;
  ideas = ideas.map(function (idea) {
    if (idea.id !== id) { return idea; }
    return data;
  });
  store.emit('change', ideas);
};

store.destroy = (id) => {
  ideas = ideas.filter(idea => idea.id !== id);
  store.emit('change', ideas);
};

store.select = (id) => {
  ideas = ideas.map(function (idea) {
    idea.active = idea.id === id;
    return idea;
  });
  store.emit('change', ideas);
};

store.deselect = (id) => {
  ideas = ideas.map(function (idea) {
    idea.active = false;
    return idea;
  });
  store.emit('change', ideas);
};

store.on('change', (ideas) => {
  localStorage.setItem('ideas', JSON.stringify(ideas));
});

module.exports = store;
