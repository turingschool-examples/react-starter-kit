const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'dist')));

/*
*  No need for an arrow function here since we do not need to bind this.
*/
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/dist/index.html');
});

app.listen(PORT, error => {
  error
  ? console.error(error)
  : console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`)
});
