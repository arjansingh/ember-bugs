import { moduleForModel, test } from 'ember-qunit';

moduleForModel('github-follower-set', 'Unit | Model | github follower set', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
