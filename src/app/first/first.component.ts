import { Component } from '@angular/core';

import { Category } from './category.enum';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-first',
  standalone: true,
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  imports: [SharedModule]
})
export class FirstComponent {
  name: string = "Test Component"
  description: string = "Designed to test new features"
  price: number = 100
  category: Category = Category.CATEGORY_ONE
  isAvailable: boolean = true
  stringArray: string[] = ["Hello", "World"]
}