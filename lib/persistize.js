/**
 * Define hook to persist in local storage
 * @function persistize
 */
'use strict'

const { save, restore } = require('bstorage')

/** @function persistize */
function persistize (keys) {
  let { prefixed } = persistize
  return keys.reduce((hooks, key) => Object.assign(hooks, {
    [key]: (prevValue, value) => save(prefixed(key), value)
  }), {})
}

Object.assign(persistize, {
  PREFIX: 'store',
  prefixed (key) {
    let { PREFIX } = persistize
    return `${PREFIX}.${key}`
  },
  regain (keys) {
    let { prefixed } = persistize
    return keys.reduce((state, key) => Object.assign(state, {
      [key]: restore(prefixed(key)) || undefined
    }), {})
  }
})

module.exports = persistize
