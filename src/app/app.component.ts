import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop';

  @ViewChild("appTitle")
  elem!: ElementRef<HTMLHeadingElement>

  ngAfterViewInit() {
    this.elem.nativeElement.textContent = "Angular studying application"
  }
}
