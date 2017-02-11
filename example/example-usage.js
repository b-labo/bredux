'use strict'

const { create, hook } = require('bredux')

let store = create(/* ... */)

hook(store, {
  // Hook handlers
  lang (prev, cur) {
    // Fired when lang changed
  }
})
