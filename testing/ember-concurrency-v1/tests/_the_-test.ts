import { module, test } from 'qunit';

import { two } from 'my-addon';

module('v2 addon tests', function (hooks) {
  test('utils work', function (assert) {
    assert.strictEqual(two, 2);
  });
});
