import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const m = [];

    for (let i = 0; i < 500; i++) {
      m.push({foo: 'bar', baz: 123});
    }

    return m;
  }
});
