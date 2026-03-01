import { Directive, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]'
})
export class ScrollRevealDirective implements AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit() {
    this.renderer.addClass(this.el.nativeElement, 'reveal-hidden');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {

        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, 'reveal-visible');

          // observer.unobserve(entry.target); 
        } else {
          this.renderer.removeClass(this.el.nativeElement, 'reveal-visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px' 
    });

    observer.observe(this.el.nativeElement);
  }
}