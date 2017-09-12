import fetch from 'fetch';
import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return fetch('https://api.github.com/users/arjansingh').then((res) => res.json());
  }
});
