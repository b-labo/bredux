'use strict'

const { createStore } = require('redux')
const { hook } = require('bredux')

let store = createStore(/* ... */)

hook.store({
  // Hook handlers
  lang (prev, cur) {
    // Fired when lang changed
  }
})
