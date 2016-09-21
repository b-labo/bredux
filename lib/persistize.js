/**
 * Define hook to persist in local storage
 * @function persistize
 * @param {string[]} keys - Keys to persist
 * @param {Object} [options={}] - Optional settings
 */
'use strict'

const { save, restore } = require('bstorage')

const throughFilter = () => true

/** @function persistize */
function persistize (keys, options = {}) {
  let { prefixed } = persistize
  let { filter = throughFilter } = options
  return keys.reduce((hooks, key) => Object.assign(hooks, {
    [key]: (prevValue, value) =>
      save(prefixed(key), filter(key, value) ? value : null)
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
    return keys.reduce((state, key) => {
      let value = restore(prefixed(key))
      let notFound = typeof value === 'undefined'
      if (notFound) {
        return state
      }
      return Object.assign(state, {
        [key]: value
      })
    }, {})
  }
})

module.exports = persistize
