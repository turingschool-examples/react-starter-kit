const root = 'https://opentdb.com';

const retrieveTrivia = function(limit) {
  return fetch(`${root}/api.php?amount=${limit}`)
}

const categories = [{"id":9,"name":"General Knowledge"},{"id":22,"name":"Geography"},{"id":23,"name":"History"}];

export {
  retrieveTrivia,
  categories
}

