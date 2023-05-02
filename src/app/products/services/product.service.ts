import { Injectable } from '@angular/core';

import { ProductModel } from '../models/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: ProductModel[] = [
      new ProductModel("Cat", 22, true),
      new ProductModel("Dog", 45, false),
      new ProductModel("Mice", 11, true)
    ]

  getProducts(): ProductModel[] {
    return this.products
  }
}
