# React Starter Kit
## Overview
This is a simple starter to get you up and running for React projects. This is intended to provide:

* a lightweight webpack config (for development and production)
* some helpful tooling for development workflow
* a similar setup to what you'll see in the wild
* Heroku-ready deployment setup

_* Note that this no longer works with github pages_

## Up & Running
• Install dependencies:

`$ npm install` or `$ yarn`

• Fire up a development server:

```js
$ npm run dev
```

Once the server is running, you can visit:

* `http://localhost:8080/` to run your application.


## Linting
_This assumes you have eslint and eslint-watch installed. If you don't, run the following:_
```js
$ npm i -g eslint eslint-watch
```

or if you need permissions:

```js
$ sudo npm i -g eslint eslint-watch
```

To run the linter once:
```js
$ npm run lint
```

To run the watch task:
```js
$ npm run lint:watch
```

## Testing
To run the tests:
```
$ npm test
```

## Production Build
To build your production assets and run the server:
```js
$ npm start
```

## Deploy to Heroku 🚀
_This assumes you have already have a Heroku account and have the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) installed_

```bash
$ heroku login
$ heroku create -a name-of-your-app
$ git push heroku master
$ heroku open
```
