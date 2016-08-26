import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home');
  this.route('user', { path: 'profile' }, function() {
    this.route('following');
    this.route('followers');
  });
});

export default Router;
