/**
 * B flavour redux
 * @module bredux
 */

'use strict'

let d = (module) => module && module.default || module

module.exports = {
  get create () { return d(require('./create')) },
  get devTool () { return d(require('./dev_tool')) },
  get hook () { return d(require('./hook')) },
  get persistize () { return d(require('./persistize')) }
}
