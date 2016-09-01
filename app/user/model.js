import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr('string'),
  numberOfChirps: DS.attr('number'),
  numberOfFollowing: DS.attr('number'),
  numberOfFollowers: DS.attr('number')
});