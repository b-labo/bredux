/**
 * B flavour redux
 * @module bredux
 */

'use strict'

const d = (module) => module && module.default || module

const applyMiddleware = d(require('./apply_middleware'))
const combineReducers = d(require('./combine_reducers'))
const create = d(require('./create'))
const devTool = d(require('./dev_tool'))
const hook = d(require('./hook'))
const persistize = d(require('./persistize'))

module.exports = {
  applyMiddleware,
  combineReducers,
  create,
  devTool,
  hook,
  persistize
}
