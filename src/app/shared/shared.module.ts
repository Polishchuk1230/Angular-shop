import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';
import { FontResizeDirective } from './font-resize.directive';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HighlightDirective,
    FontResizeDirective,
    OrderByPipe
  ],
  exports: [
    FormsModule,

    HighlightDirective,
    FontResizeDirective,
    OrderByPipe
  ]
})
export class SharedModule { }
