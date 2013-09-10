Ember.Handlebars.registerBoundHelper('moment', function (input) {
	if( moment(input).isValid() ) {
		return moment(input).format('dddd, MMMM DD, YYYY @ hh:mm a');
	}
});