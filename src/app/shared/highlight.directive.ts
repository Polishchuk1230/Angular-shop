import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  @HostBinding('style.backgroundColor')
  backgroundColor: string | undefined;

  @HostListener('mouseenter')
  onMouseEnter() {
    this.backgroundColor = "red"
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.backgroundColor = undefined;
  }
}