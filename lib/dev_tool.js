/**
 * @function devTool
 */
'use strict'

const { get } = require('bwindow')

module.exports = get('__REDUX_DEVTOOLS_EXTENSION__') || get('devToolsExtension')
