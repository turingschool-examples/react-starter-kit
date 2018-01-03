export default {
  getTrivia(count) {
    return fetch(`https://opentdb.com/api.php?amount=${count}`)
    .then( response => response.json() );
  },
  getCategories() {
    return fetch(`https://opentdb.com/api_category.php`)
    .then( response => response.json() );
  }
}