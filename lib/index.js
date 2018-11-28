/**
 * B flavour redux
 * @module bredux
 */

'use strict'

const _d = (module) => module && module.default || module

const applyMiddleware = _d(require('./apply_middleware'))
const combineReducers = _d(require('./combine_reducers'))
const create = _d(require('./create'))
const devTool = _d(require('./dev_tool'))
const hook = _d(require('./hook'))
const persistize = _d(require('./persistize'))

module.exports = {
  applyMiddleware,
  combineReducers,
  create,
  devTool,
  hook,
  persistize
}
