Anthracite.PostsNewController = Ember.ArrayController.extend({
	publishPost: function() {
		var title = this.get('postTitle')
		, postContent = this.get('postContent');
		
		if (!title.trim() || !postContent.trim()) { return; }
		
		var post = Anthracite.Post.createRecord({
			postTitle: title,
			postContent: postContent
		});
		
		post.save();
		
		this.transitionToRoute('posts');
	}
});