Anthracite.PostsNewController = Ember.ArrayController.extend({
	actions: {
		publishPost: function() {
			var postTitle = this.get('postTitle')
			, postContent = this.get('postContent');
			
			if (!postTitle.trim() || !postContent.trim()) { return; }
			
//			var post = Anthracite.Post.createRecord({
//				postTitle: postTitle,
//				postContent: postContent
//			});

			var store = this.get('store');
			store.push('post', {
				id: 3,
				postTitle: postTitle,
				postContent: postContent
			});
			
			this.transitionToRoute('posts');
		}
	}
});