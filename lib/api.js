const root = 'https://opentdb.com';

function apiGet (url) {
  return fetch(url).then( response => response.json() );
}

export default {
  getTrivia(count) {
    return apiGet(`${root}/api.php?amount=${count}`);
  },
  getCategories() {
    return apiGet(`${root}/api_category.php`);
  }
}