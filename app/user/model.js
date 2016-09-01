import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  username: DS.attr('string'),
  aboutMe: DS.attr('string'),
  joinedAt: DS.attr('date'),
  
  followees: DS.hasMany('user', {
    inverse: 'followers'
  }),
  followers: DS.hasMany('user', {
    inverse: 'followees'
  }),
  numberOfFollowing: Ember.computed('followees', function() {
    return this.get('followees').get('length');
  }),
  numberOfFollowers: Ember.computed('followers', function() {
    return this.get('followers').get('length');
  }),
  
  chirps: DS.hasMany('chirp', { async: true }),
  numberOfChirps: Ember.computed('chirps', function() {
    return this.get('chirps').get('length');
  })
});