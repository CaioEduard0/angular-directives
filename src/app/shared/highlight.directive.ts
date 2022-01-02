import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @Input() highlightColor: string = 'green';
  @Input() colorDefault: string = 'white';

  @HostListener('mouseenter') onMouseOver() {
      this.backgroundColor = this.highlightColor;
  }
  
  @HostListener('mouseleave') onMouseOut() {
    this.backgroundColor = this.colorDefault;
  }

  @HostBinding('style.backgroundColor') backgroundColor: string = '';

  constructor() { }

  ngOnInit(): void {
    this.backgroundColor = this.colorDefault;
    
  }

}
