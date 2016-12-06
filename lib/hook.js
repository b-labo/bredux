/**
 * Add hook on store.
 * @function hook
 * @param {Object} store - A store instance
 * @param {Object} handlers - Hook handlers
 * @returns {function} - Unsubscribe function
 */
'use strict'

/** @lends hook */
function hook (store, handlers) {
  const cache = store.getState()
  const trigger = (options = {}) => {
    let { force = false } = options
    let state = store.getState()
    for (let key of Object.keys(handlers)) {
      let prevValue = cache[ key ]
      let value = state[ key ]
      let skip = !force && prevValue === value
      if (skip) {
        continue
      }
      let handler = handlers[ key ]
      handler(prevValue, value)
      cache[ key ] = value
    }
  }
  const remove = store.subscribe(() => trigger({ force: false }))
  return Object.assign(remove, { remove, trigger })
}

module.exports = hook
