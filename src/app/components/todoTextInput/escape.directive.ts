import {Directive, HostListener, Output} from "@angular/core";
import {EventEmitter} from "@angular/common/src/facade/async";

@Directive({
  selector: '[onEscape]'
})
export class EscapeDirective {

  ESCAPE_KEY = 27;

  @Output()
  onEscape = new EventEmitter();

  @HostListener('keydown', ['$event']) onKeyDown(event) {
    if (event.keyCode === this.ESCAPE_KEY) {
      this.onEscape.emit(event);
    }
  }
}
