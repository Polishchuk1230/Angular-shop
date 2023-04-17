import { Injectable } from '@angular/core';

import { ProductModel } from '../models/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() { }

  getProducts() {
    return new Array<ProductModel>(
      new ProductModel("Cat", 22),
      new ProductModel("Dog", 45),
      new ProductModel("Mice", 11))
  }
}
