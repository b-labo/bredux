/**
 * Test case for hook.
 * Runs with mocha.
 */
'use strict'

const hook = require('../lib/hook.js')
const assert = require('assert')
const {createStore} = require('redux')

describe('hook', function () {
  this.timeout(3000)

  before(() => {

  })

  after(() => {

  })

  it('Hook', () => {
    const reducer = (state = {}, action) => {
      switch (action.type) {
        case 'SET':
          return Object.assign({}, state, {
            [action.key]: action.val
          })
        default:
          return state
      }
    }
    let store = createStore(reducer, {
      foo: {
        name: 'FOO'
      }
    })
    let hooked
    let count = 0
    hook(store, {
      foo (from, to) {
        hooked = {from, to}
        count++
      }
    })
    {
      let state = store.getState()
      assert.deepEqual(state, {foo: {name: 'FOO'}})
    }
    store.dispatch({
      type: 'SET',
      key: 'foo',
      val: {name: 'FOO2'}
    })
    store.dispatch({
      type: 'SET',
      key: 'bar',
      val: {name: 'FOO2'}
    })
    assert.equal(count, 1)
    assert.deepEqual(hooked, {from: {name: 'FOO'}, to: {name: 'FOO2'}})
  })
})

/* global describe, before, after, it */
