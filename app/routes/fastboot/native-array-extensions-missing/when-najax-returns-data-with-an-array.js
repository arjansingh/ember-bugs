import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.get('store')
    .findRecord('github-follower-set', 'tomdale')
    .then(o => o.get('followers').sortBy('login'));
  },

});
