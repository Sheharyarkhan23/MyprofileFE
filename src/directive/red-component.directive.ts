import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedComponent]'
})
export class RedComponentDirective {

  constructor(public el: ElementRef) {
    el.nativeElement.style.color = 'red';
  }
  
}
