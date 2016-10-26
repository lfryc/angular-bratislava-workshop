import {OnInit, Directive, ElementRef, Renderer} from "@angular/core";

@Directive({
  selector: '[autofocus]'
})
export class AutofocusDirective implements OnInit{

  constructor(private el: ElementRef, renderer: Renderer) {
  }

  ngOnInit() {
      setTimeout(() => this.el.nativeElement.focus(), 0);
  }
}
