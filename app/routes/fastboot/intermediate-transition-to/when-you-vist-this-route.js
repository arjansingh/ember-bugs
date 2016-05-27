import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel(transition) {
    transition.abort();
    this.intermediateTransitionTo('fastboot.intermediate-transition-to.should-render-this-content');
  }
});
