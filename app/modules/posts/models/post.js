
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
