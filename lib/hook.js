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
  let cache = store.getState()
  let unsubscribe = store.subscribe(() => {
    let state = store.getState()
    for (let key of Object.keys(handlers)) {
      let prevValue = cache[ key ]
      let value = state[ key ]
      let changed = prevValue !== value
      if (changed) {
        let handler = handlers[ key ]
        handler(prevValue, value)
      }
      cache[ key ] = value
    }
  })
  return Object.assign(unsubscribe, { unsubscribe })
}

module.exports = hook
