import {Component, Input, Output} from "@angular/core";
import {EventEmitter} from "@angular/common/src/facade/async";

@Component({
  selector: 'todo-text-input',
  template: require('./todoTextInput.component.html')
})
export class TodoTextInput {

  @Input()
  placeholder;

  @Input()
  value;

  @Output()
  onSave: EventEmitter<any> = new EventEmitter();

  text;

  constructor() {
    this.text = this.value || '';
  }

  save() {
    this.onSave.emit(this.text);

    this.text = '';
  }

  onEscape() {
    this.onSave.emit(this.value);
  }
}
