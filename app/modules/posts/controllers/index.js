Anthracite.PostsIndexController = Ember.Controller.extend({
  needs: ['posts']

//  actions: {
//    newTodo: function() { 
//        this.store.createRecord('todo', {
//          name: 'Get r done'
//        }); 
//    },
//
//    clearDone: function() {
//      var todos = this.get('controllers.todos');
//      var allDone = todos.filter(function(todo) {
//        return todo.get('isDone');
//      });
//
//      while (allDone.length > 0) {
//        var todo = allDone.pop(); 
//          todo.deleteRecord();
//          todo.save(); 
//      }
//    }
//  }
});
