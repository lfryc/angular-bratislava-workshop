angular
  .module('app.components')
  .component('todoBatchToggle', {
    bindings: {
      onToggle: '&',
      todos: '='
    },
    templateUrl: 'app/components/todoBatchToggle.component.html',
    controller: BatchTogglerController,
    controllerAs: 'vm'
  });


function BatchTogglerController() {

  this.allChecked = allChecked;


  function allChecked() {
    return this.todos.reduce(function (result, task) {
      return result && task.complete }
    , true);
  }
}
