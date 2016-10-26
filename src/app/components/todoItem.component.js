angular
  .module('app.components')
  .component('todoItem', {
      bindings: {
        task: '=todo'
      },
      template: require('./todoItem.component.html'),
      controller: TodoItemController,
      controllerAs: 'vm'
    }
  );


function TodoItemController(todoList) {
  this.todoList = todoList;
  this.isEditing = false;

  this.onDestroyClick = onDestroyClick;
  this.onSave = onSave;
  this.toggleStatus = toggleStatus;
  this.complete = complete;


  function onDestroyClick() {
    this.todoList.remove(this.task);
  }

  function onSave(description) {
    if (!description) {
      this.todoList.remove(this.task);
    } else {
      this.task.description = description;
    }

    this.isEditing = false;
  }

  function toggleStatus() {
    this.todoList.toggleStatus(this.task);
  }

  function complete() {
    return this.task.complete;
  }
}
