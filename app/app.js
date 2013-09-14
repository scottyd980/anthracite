/* global window, Ember */
window.Anthracite = Ember.Application.createWithMixins(Bootstrap.Register);

//window.Anthracite = Ember.Application.createWithMixins(Bootstrap.Register);

// Load mixins and components before anything else
require('mixins/*');
require('components/*');

require('store');
require('modules/*/models/*');
require('modules/*/routes/*');
require('modules/*/controllers/*');
require('modules/*/views/*');
require('helpers/*');
require('router');
