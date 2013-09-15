(function() {

/* global window, Ember */
window.Anthracite = Ember.Application.createWithMixins(Bootstrap.Register);

//window.Anthracite = Ember.Application.createWithMixins(Bootstrap.Register);

// Load mixins and components before anything else


})();

(function() {

Anthracite.TodoItemComponent = Ember.Component.extend({
  item: null,

  keyDown: function (event) {
    if (event.which === 13) {
      event.preventDefault();

      var item = this.get('item'),
        editable = this.$('.todo-editable');
      item.set('name', editable.text());
      
      item.save();
      

      editable.prop('contenteditable', false).blur();
    }
  },

  actions: {
    edit: function () {
      this.$('.todo-editable').prop('contenteditable', true).focus();
    },

    delete: function () {
      var item = this.get('item');
      
      item.deleteRecord();
      //item.save();
      
    }
  }
});


})();

(function() {


//Anthracite.Store = DS.Store.extend({
//  revision: 12,
//  adapter: DS.FixtureAdapter.create()
//});

Anthracite.ApplicationAdapter = DS.FixtureAdapter;


})();

(function() {


Anthracite.Site = DS.Model.extend({
  title: DS.attr('string'),
  link: DS.attr('string')
});

Anthracite.Site.FIXTURES = [
  {
    id: 1,
    title: 'About',
    link: 'about'
  },
  {
    id: 2,
    title: 'Contact',
    link: 'contact'
  },
  {
    id: 3,
    title: 'Todos',
    link: 'todos'
  }
];



})();

(function() {


  Anthracite.Post = DS.Model.extend({
  	postDate: DS.attr('date'),
    postTitle: DS.attr('string'),
    postContent: DS.attr('string')
  });

  Anthracite.Post.FIXTURES = [{
  	id: 1,
  	postDate: new Date(),
	postTitle: 'Hello world!',
	postContent: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec id elit non mi porta gravida at eget metus.'
  }, {
  	id: 2,
  	postDate: new Date(),
    postTitle: 'Another Post',
    postContent: 'Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus mollis interdum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nullam id dolor id nibh ultricies vehicula ut id elit.'
  }]; 


})();

(function() {


  Anthracite.Todo = DS.Model.extend({
    name: DS.attr('string'),
    isDone: DS.attr('boolean')
  });

  Anthracite.Todo.FIXTURES = [{
    id: 'a',
    name: 'Walk the dog',
    isDone: false
  }, {
    id: 'b',
    name: 'Buy groceries',
    isDone: false
  }]; 


})();

(function() {

Anthracite.ApplicationRoute = Ember.Route.extend({
  model: function(params) { 
      return this.store.find('site'); 
  }
});


})();

(function() {

Anthracite.IndexRoute = Ember.Route.extend({
  model: function(params) { 
      return this.store.find('post'); 
  }
});


})();

(function() {

Anthracite.PostsIndexRoute = Ember.Route.extend({
  model: function(params) { 
      return this.store.find('post'); 
  }
});


})();

(function() {

Anthracite.TodosRoute = Ember.Route.extend({
  model: function(params) { 
      return this.store.find('todo'); 
  }
});


})();

(function() {

Anthracite.AboutController = Ember.Controller.extend({
  someText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque libero massa, mollis.'
});

})();

(function() {

Anthracite.ApplicationController = Ember.ArrayController.extend({
	currentPathDidChange: function() {
	  window.scrollTo(0,0);
	}.observes('currentPath')
});

})();

(function() {

Anthracite.IndexController = Ember.ArrayController.extend({});

})();

(function() {

Anthracite.PostsIndexController = Ember.ArrayController.extend({
	
});

})();

(function() {

Anthracite.PostsNewController = Ember.ArrayController.extend({
	actions: {
		publishPost: function() {
			var postTitle = this.get('postTitle')
			, postContent = this.get('postContent');
			
			if (!postTitle.trim() || !postContent.trim()) { return; }
			
			this.store.createRecord('post', {
				id: 3,
				postTitle: postTitle,
				postContent: postContent
			});
			
			this.set('postTitle', '');
			this.set('postContent', '');
			
			this.transitionToRoute('posts');
			Bootstrap.GNM.push('Success!', postTitle + ' was successfully posted.', 'success');
		}
	}
});

})();

(function() {

Anthracite.PostsController = Ember.ArrayController.extend({
});

})();

(function() {

Anthracite.TodosIndexController = Ember.Controller.extend({
  needs: ['todos'],

  actions: {
    newTodo: function() { 
        this.store.createRecord('todo', {
          name: 'Get r done'
        }); 
    },

    clearDone: function() {
      var todos = this.get('controllers.todos');
      var allDone = todos.filter(function(todo) {
        return todo.get('isDone');
      });

      while (allDone.length > 0) {
        var todo = allDone.pop(); 
          todo.deleteRecord();
          todo.save(); 
      }
    }
  }
});


})();

(function() {

Anthracite.TodosController = Ember.ArrayController.extend({
});

})();

(function() {

Anthracite.IndexView = Ember.View.extend({
});

})();

(function() {

Ember.Handlebars.registerBoundHelper('format-markdown', function (input) {
	if (typeof input === 'string' && input.length) {
		return new Handlebars.SafeString(marked(input));
	}
});

})();

(function() {

Ember.Handlebars.registerBoundHelper('moment', function (input) {
	if( moment(input).isValid() ) {
		return moment(input).format('dddd, MMMM DD, YYYY @ hh:mm a');
	}
});

})();

(function() {

Ember.Handlebars.registerBoundHelper('wordCount', function (value) {
  var ret;
  if (typeof value === 'string' && value.length) {
    return ((ret = value.trim().match(/\s+/g).length) > 0) ? (ret + 1) : 1;
  }
  return '0';
});

})();

(function() {

Anthracite.Router.map(function() {
  this.route('about', { path: '/about' });
  this.route('contact', { path: '/contact_me' });

  this.resource('todos', function () {
    this.route('index', { path: '/' });
  });
  
  this.resource('posts', function() {
  	this.route('index', { path: '/'});
  	this.route('new', { path: '/new'});
  });
  
  this.resource('post', { path: '/post/:post_id' });
});


})();