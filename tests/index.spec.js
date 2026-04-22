const assert = require('node:assert')
const { getTrue } = require('../');

const { suite, test } = require('mocha')

suite('test()', () => {
  test('returns true', () => {
    const val = getTrue();
    assert.strictEqual(val, true);
  });
});
