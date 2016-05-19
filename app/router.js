import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('fastboot', function() {
    this.route('intermediate-transition-to', function() {
      this.route('when-you-vist-this-route');
      this.route('should-render-this-content');
    });
  });
});

export default Router;
