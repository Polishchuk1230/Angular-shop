import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fontResize]'
})
export class FontResizeDirective implements OnInit {

  @Input('fontResize') fontSize!: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    
  }

  ngOnInit(): void {
      this.renderer.setStyle(this.elementRef.nativeElement, 'font-size', this.fontSize);
  }

  @HostListener('click')
  onClick() {
    let element: HTMLElement = this.elementRef.nativeElement;
    let fontSizeValue: number = parseInt(
        window.getComputedStyle(element).getPropertyValue("font-size"), 10);

    if (fontSizeValue < 20) {
        this.renderer.setStyle(element, 'font-size', fontSizeValue + 2 + "px");
    } else {
        this.renderer.setStyle(element, 'font-size', "8px");
    }
  }
}