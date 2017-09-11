import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  routeURL: config.routeURL
});

Router.map(function() {
  this.route('fastboot', function() {
    this.route('intermediate-transition-to', function() {
      this.route('when-you-vist-this-route');
      this.route('should-render-this-content');
    });

    this.route('native-array', function() {});

    this.route('native-array-extensions-missing', function() {
      this.route('when-najax-returns-data-with-an-array');
    });
  });
  this.route('working-route');
  this.mount('an-ember-engine');
});

export default Router;
