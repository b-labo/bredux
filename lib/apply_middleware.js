/**
 * Apply middlewares
 * @function applyMiddleware
 * @param {...function} middlewares
 * @returns {function} - Redux enhancer
 */
'use strict'

const { applyMiddleware } = require('redux')

/** @lends applyMiddleware */
module.exports = applyMiddleware
