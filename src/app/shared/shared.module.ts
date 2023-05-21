import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';
import { FontResizeDirective } from './font-resize.directive';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HighlightDirective,
    FontResizeDirective
  ],
  exports: [
    HighlightDirective,
    FontResizeDirective
  ]
})
export class SharedModule { }
