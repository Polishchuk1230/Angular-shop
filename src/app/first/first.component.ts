import { Component } from '@angular/core';

import { Category } from './category.enum';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  name: string = "Test Component"
  description: string = "Designed to test new features"
  price: number = 100
  category: Category = Category.CATEGORY_ONE
  isAvailable: boolean = true
  stringArray: string[] = ["Hello", "World"]
}