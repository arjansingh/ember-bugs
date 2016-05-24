import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  buildURL(modelName, id) {
    return `https://api.github.com/users/${id}/followers`;
  },

  headers: {
    'Accept-Encoding': '',
    'User-Agent': 'arjansingh/ember-bugs',
  },
});
