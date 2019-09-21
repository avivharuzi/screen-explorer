import { Directive, ElementRef, HostListener } from '@angular/core';

import { environment } from '../../../environments/environment';

@Directive({
  selector: '[appNoImage]',
})
export class NoImageDirective {
  constructor(
    private el: ElementRef,
  ) {
  }

  @HostListener('error') onError(): void {
    this.el.nativeElement.src = environment.noImagePath;
  }
}
