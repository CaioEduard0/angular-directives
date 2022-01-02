import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[appMouseHighlight]'
})
export class MouseHighlightDirective {

  @HostListener('mouseenter') onMouseOver() {
  //   this.renderer.setStyle(this.elementRef.nativeElement,
  //     'background-color', 'pink')
    this.backgroundColor = 'pink';
  }

  @HostListener('mouseleave') onMouseOut() {
  //   this.renderer.setStyle(this.elementRef.nativeElement,
  //     'background-color', 'white')
    this.backgroundColor = 'white';
  }

  @HostBinding('style.backgroundColor') backgroundColor: string = '';

  @HostBinding('style.background-color') get setColor() {
    //use when have to change or manipulate the code
    return this.backgroundColor;
  }

  constructor(//private elementRef: ElementRef,
    //private renderer: Renderer2
    ) { }

}
