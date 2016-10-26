angular
  .module('app')
  .component('app', {
    template: require('./app.component.html'),
    controller: TodoAppController
  });

function TodoAppController(todoList) {

  this.todos = todoList;

  this.onSave = onSave;
  this.onFilter = onFilter;
  this.onToggleAll = onToggleAll;


  function onSave(task) {
    if (!task) return;

    this.todos.add(task);
  }

  function onFilter(state) {
    switch (state) {
      case 'all':
        this.todos.showAll();
        break;
      case 'active':
        this.todos.showActive();
        break;
      case 'completed':
        this.todos.showCompleted();
        break;
    }
  }

  function onToggleAll() {
    this.todos.toggleAll();
  }
}
