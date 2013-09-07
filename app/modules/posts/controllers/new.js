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
		}
	}
});