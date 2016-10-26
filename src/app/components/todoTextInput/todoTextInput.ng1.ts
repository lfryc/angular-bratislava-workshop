import {TodoTextInput} from "./todoTextInput.component";

export default function registerTodoTextInputModule(angular, upgradeAdapter) {

    angular
        .module('app.todoTextInput', [])
        .directive('downgradedTodoTextInput', <any> upgradeAdapter.downgradeNg2Component(TodoTextInput))
        .component('todoTextInput', {
            bindings: {
                'placeholder': '@',
                'value': '<',
                'onSave': '&'
            },
            controller: function() {
                this.save = (value) => {
                    this.onSave({
                        task: value
                    })
                }
            },
            template: `
                <downgraded-todo-text-input [value]="$ctrl.value" (on-save)="$ctrl.save($event)" placeholder="{{ $ctrl.placeholder }}"></downgraded-todo-text-input>
            `
        });
}
