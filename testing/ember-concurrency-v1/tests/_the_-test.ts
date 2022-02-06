import { module, test } from 'qunit';

import { two } from 'my-addon';
import { range } from 'my-addon/optional-ember-concurrency-file';

module('v2 addon tests', function (hooks) {
  test('utils work', function (assert) {
    assert.strictEqual(two, 2);
  });

  test('optional dependency resolves as desired', function (assert) {
    assert.strictEqual(range, '^1.0.0');
  });
});
