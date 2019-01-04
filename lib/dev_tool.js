/**
 * @function devTool
 */
'use strict'

const { get } = require('bwindow')

const devToolsExtension = get('__REDUX_DEVTOOLS_EXTENSION__')
module.exports = devToolsExtension ? devToolsExtension : get('devToolsExtension')
