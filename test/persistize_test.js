/**
 * Test case for persistize.
 * Runs with mocha.
 */
'use strict'

const persistize = require('../lib/persistize.js')
const assert = require('assert')
const co = require('co')

describe('persistize', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Persistize', () => co(function * () {
    let handlers = persistize(['foo', 'bar'])
    assert.ok(handlers.foo)
    assert.ok(handlers.bar)
  }))
})

/* global describe, before, after, it */
