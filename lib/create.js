/**
 * Create a store
 * @function create
 * @param {function} reducer - Reducer function
 * @param {Object} preloadedState - Preloaded state object
 * @param {function[]} enhancers - Enhancer functions
 * @returns {Object} store - A store instance
 */
'use strict'

const {
  createStore,
  compose
} = require('redux')

/** @lends create */
function create (reducer, preloadedState, enhancers) {
  return createStore(reducer, preloadedState, compose(
    ...[].concat(enhancers).filter(Boolean)
  ))
}

module.exports = create
