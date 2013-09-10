Ember.Handlebars.registerBoundHelper('format-markdown', function (input) {
	if (typeof input === 'string' && input.length) {
		return new Handlebars.SafeString(marked(input));
	}
});