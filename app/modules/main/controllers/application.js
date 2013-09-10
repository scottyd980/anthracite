Anthracite.ApplicationController = Ember.ArrayController.extend({
	currentPathDidChange: function() {
	  window.scrollTo(0,0);
	}.observes('currentPath')
});