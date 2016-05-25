const EventEmitter = require('events');

// Start out with an empty array to store ideas.
let ideas = [];

// Create a store object that can emit events.
const store = new EventEmitter();

// Check localStorage to see if we have any notes saves from last time.
const storedIdeas = localStorage.getItem('ideas');
if (storedIdeas) { ideas = JSON.parse(storedIdeas); }

store.all = () => ideas.concat([]);

store.create = ({ title, body }) => {
  ideas = ideas.concat({ title, body, active: false, id: Date.now() });
  store.emit('change', ideas);
};

store.destroy = (id) => {
  ideas = ideas.filter(idea => idea.id !== id);
  store.emit('change', ideas);
};

store.update = (id, data) => {
  ideas = ideas.map(idea => {
    if (idea.id !== id) { return idea; }
    return Object.assign(idea, data);
  });
  store.emit('change', ideas);
};

store.select = (id) => {
  ideas = ideas.map(idea => Object.assign(idea, { active: idea.id === id }));
  store.emit('change', ideas);
};

store.deselect = () => {
  ideas = ideas.map(idea => Object.assign(idea, { active: false }));
  store.emit('change', ideas);
};

store.on('change', () => {
  localStorage.setItem('ideas', JSON.stringify(ideas));
});

module.exports = store;
