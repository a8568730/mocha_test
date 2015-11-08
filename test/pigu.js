//Test Mocha

var assert = require('assert');

describe('Test Mocha', function() {
  describe('run basic string test', function () {
    it('pigu is pigu', function () {
      assert.equal('pigu', 'pigu');
    });
    it('pigu is not ppppigu', function () {
      assert.notEqual('pigu', 'ppppigu');
    });
  });
});