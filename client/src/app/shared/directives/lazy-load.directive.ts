import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appLazyLoad]',
})
export class LazyLoadDirective implements OnChanges {
  @Input('appLazyLoad') src: string;

  private lazyImageObserver: IntersectionObserver;

  constructor(
    private elementRef: ElementRef,
  ) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.src) {
      this.observeAndLazyLoadImages(this.elementRef.nativeElement);
    }
  }

  private observeAndLazyLoadImages(lazyImage: Element): void {
    const isIntersectionObserverSupported = window && 'IntersectionObserver' in window;

    if (isIntersectionObserverSupported) {
      if (this.lazyImageObserver) {
        this.lazyImageObserver.unobserve(lazyImage);
        this.lazyImageObserver = null;
      }

      this.lazyImageObserver = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          if (entry.isIntersecting) {
            this.setImageSrc(entry.target);
            this.lazyImageObserver.unobserve(entry.target);
            this.lazyImageObserver = null;
          }
        });
      });

      this.lazyImageObserver.observe(lazyImage);
    } else {
      this.setImageSrc(lazyImage);
    }
  }

  private setImageSrc(image): void {
    image.src = this.src;
  }
}
