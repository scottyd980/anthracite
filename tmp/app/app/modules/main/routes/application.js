Anthracite.ApplicationRoute = Ember.Route.extend({
  model: function(params) { 
      return this.store.find('site'); 
  }
});
