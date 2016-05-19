import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    this.intermediateTransitionTo('fastboot.intermediate-transition-to.should-render-this-content');
  }
});
