'use strict';
var assert = require('assert');
module.exports = function () {
  assert.ok(typeof window !== 'undefined', "Browser only module!");
  var opera = window.opera;
  return (
    typeof opera === 'object' &&
    typeof opera.version === 'function' &&
    12 <= parseInt(opera.version(), 10)
  );
};
