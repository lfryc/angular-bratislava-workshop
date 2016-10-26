angular
  .module('app.todoTextInput')
  .component('todoTextInput', {
    bindings: {
      placeholder: '@',
      value: '@',
      onSave: '&'
    },
    template: require('./todoTextInput.component.html'),
    controller: TodoTextInputController,
    controllerAs: 'vm'
  });


function TodoTextInputController() {
  this.text = this.value || '';

  this.save = save;
  this.onEscape = onEscape;

  function save() {
    this.onSave({
      task: this.text
    });

    this.text = '';
  }

  function onEscape() {
    this.onSave({
      task: this.value
    });
  }
}
