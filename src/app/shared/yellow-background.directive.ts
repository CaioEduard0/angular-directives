import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'p[appYellowBackground]'
})
export class YellowBackgroundDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { 
    // console.log(this.elementRef);
    // this.elementRef.nativeElement.style.color = "black";
    // this.elementRef.nativeElement.style.backgroundColor = "yellow";
    //code not used because the danger of hacker attacks
    this.renderer.setStyle(this.elementRef.nativeElement,
      'background-color', 'yellow')
  }

}
