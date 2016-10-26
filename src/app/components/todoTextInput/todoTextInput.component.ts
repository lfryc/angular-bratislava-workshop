class TodoTextInputController {

  text;
  placeholder;
  onSave;

  value;

  constructor() {
    this.text = this.value || '';
  }

  save() {
    this.onSave({
      task: this.text
    });

    this.text = '';
  }

  onEscape() {
    this.onSave({
      task: this.value
    });
  }
}

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
