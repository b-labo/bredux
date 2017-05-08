/**
 * Combine reducers
 * @function combineReducers
 * @param {Object.<string,function>} reducers
 * @returns {function} - Combined reducer
 */
'use strict'

const { combineReducers } = require('redux')

/** @lends combineReducers */
module.exports = combineReducers
