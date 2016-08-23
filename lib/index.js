/**
 * B flavour redux
 * @module bredux
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get hook () { return d(require('./hook')) },
  get persistize () { return d(require('./persistize')) }
}
