import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    const newPayload = {
      github_follower_set: {
        id,
        followers: payload,
      },
    };

    return this._super(store, primaryModelClass, newPayload, id, requestType);
  }
});
