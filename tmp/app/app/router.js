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
