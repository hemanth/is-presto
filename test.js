'use strict';
var assert = require('assert');
var isPresto = require('./');

it('should throw an error', function () {
  assert.throws(function () {
    isPresto()
  }, 'Didn\'t throw');
});
