/**
 * Create a store
 * @function create
 * @param {function} reducer - Reducer function
 * @param {Object} preloadedState - Preloaded state object
 * @param {function[]} middleware - Middleware function
 * @returns {Object} store - A store instance
 */
'use strict'

const {
  createStore
} = require('redux')

/** @lends create */
function create (reducer, preloadedState, middleware) {
  return createStore(reducer, preloadedState, middleware)
}

module.exports = create
