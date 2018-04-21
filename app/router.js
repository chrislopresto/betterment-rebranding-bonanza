import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('presentations', function() {
    this.route('hot-swapping-our-rails-front-end-in-secret');
  });
});

export default Router;
