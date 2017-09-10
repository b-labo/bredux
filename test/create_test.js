/**
 * Test case for create.
 * Runs with mocha.
 */
'use strict'

const create = require('../lib/create.js')
const assert = require('assert')
const co = require('co')

describe('create', function () {
  this.timeout(3000)

  before(() => {

  })

  after(() => {

  })

  it('Create', () => {
    let store = create(() => {})
    assert.ok(store)
  })
})

/* global describe, before, after, it */
