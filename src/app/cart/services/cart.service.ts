import { Injectable } from '@angular/core';
import { CartModel } from '../models/cart-model';
import { ProductModel } from 'src/app/products/models/product-model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: CartModel = { products: [] }

  constructor() {}

  addProduct(product: ProductModel) {
    this.cart.products[this.cart.products.length] = product
  }

  getProducts(): ProductModel[] {
    return this.cart.products
  }

  getSumPrice(): Number {
    let result: number = 0
    for (let i = 0; i < this.cart.products.length; i++) {
      result += this.cart.products[i].price
    }
    return result;
  }

  isEmpty(): boolean {
    return this.cart.products.length === 0
  }
}
