Anthracite.FocusInputView = Ember.TextField.extend({
  focusMyTextField: function() {
   this.$().focus();
  }.on('didInsertElement')
});