import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[scrollAnimation]',
  standalone: true,
})
export class ScrollAnimationDirective {
  constructor(private elementRef: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    debugger
    const elementPosition =
      this.elementRef.nativeElement.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (elementPosition < windowHeight) {
      this.elementRef.nativeElement.classList.add('animate__fadeInUp');
    }
  }
}
