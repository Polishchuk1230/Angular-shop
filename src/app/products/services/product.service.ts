import { Injectable } from '@angular/core';

import { ProductModel } from '../models/product-model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: ProductModel[] = [
      new ProductModel("Cat", 22, true),
      new ProductModel("Dog", 45, false),
      new ProductModel("Mice", 11, true)
    ]

  getProducts(): Observable<ProductModel[]> {
    return of(this.products);
  }
}
