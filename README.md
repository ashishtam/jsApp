# js-app
[![CircleCI](https://circleci.com/gh/ashishtam/jsApp.svg?style=svg)](https://circleci.com/gh/ashishtam/jsApp)
> A JavaScript framwork to get Posts with unit testing with Jest and CI/CD with CircleCI 

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# run unit tests
npm run unit

# run all tests
npm test
```

## Framework and Libraries

- [Vue.JS - JavaScript Framework](https://vuejs.org/)
- [Vuex - State Management Library](https://vuex.vuejs.org/en/intro.html)
- [Element-UI - UI framework for Vue.JS](http://element.eleme.io/#/en-US)
- [Jest - JavaScript Testing](https://facebook.github.io/jest/)
- [CircleCI](https://circleci.com/)

## Folder Structure

```bash
js-app/
├── src/
|    └── api  # Vuex state management files
|          ├── actions.js 
|          ├── mutation-types.js 
|          ├── mutations.js 
|          └── store.js 
|    ├── assets/
|    └── components/  # Front end components
|          ├── Alert.vue
|          └── Posts.vue   # Posts template
|    ├── App.vue   # App template
|    └── main.js   # main starter file
├── static
├── test  # test configuration files
|    └── unit/
|            └── specs/
|                     └── store.spec.js   # Unit testing about store
|
└── package.json
```

