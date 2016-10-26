angular
  .module('app.components')
  .component('todoFooter', {
    bindings: {},
    transclude: true,
    template: require('./todoFooter.component.html'),
    controller: TodoFooterController,
    controllerAs: 'vm'
  });


function TodoFooterController(todoList) {
  this.todos = todoList;

  this.clearCompleted = clearCompleted;


  function clearCompleted() {
    this.todos.clearCompleted();
  }
}
