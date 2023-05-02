import { Injectable } from '@angular/core';
import { CartItem, CartModel } from '../models/cart-model';
import { ProductModel } from 'src/app/products/models/product-model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: CartModel = { items: [] }

  getProducts(): CartItem[] {
    return this.cart.items
  }

  getTotalCost(): number {
    return this.cart.items.reduce((total, item) => {
      return total + (item.product?.price ?? 0) * item.quantity
    }, 0)
  }

  getTotalQuantity(): number {
    return this.cart.items.reduce((total, item) => {
      return total + item.quantity
    }, 0)
  }

  isEmpty(): boolean {
    return this.cart.items.length === 0
  }

  addProduct(product: ProductModel): void {
    let index: number = this.cart.items.findIndex(e => e.product.isEqual(product))
    if (index >= 0) {
      this.cart.items[index] = {
        product: this.cart.items[index].product,
        quantity: this.cart.items[index].quantity + 1
      }
    } else {
      this.cart.items.push({product: product, quantity: 1})
    }
  }

  /**
   * Removes a product-item from the cart or decreases its quantity by 1.
   * @param product (required) a product to remove from the cart
   * @param isForAll (optional) says whether we need to remove all equal products from the cart
   * or just decrease its quantity by 1.
   */
  removeProduct(product: ProductModel, isForAll?: boolean): void {
    let index: number = this.cart.items.findIndex(i => i.product.isEqual(product))
    let currentItem: CartItem = this.cart.items[index];
    if (!currentItem) return;
  
    if (this.cart.items[index].quantity > 1 && !isForAll) {
      this.cart.items[index] = {
        product: currentItem.product,
        quantity: currentItem.quantity - 1,
      };
    } else {
      this.cart.items.splice(index, 1);
    }
  }
}