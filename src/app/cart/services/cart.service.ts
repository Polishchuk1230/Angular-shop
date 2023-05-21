import { Injectable } from '@angular/core';
import { CartItem, CartModel } from '../models/cart-model';
import { ProductModel } from 'src/app/products/models/product-model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  private cart: CartModel = { items: [] }

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
    const existingIndex = this.findIndexByProduct(product);
  
    if (existingIndex >= 0) {
      this.cart.items = this.cart.items.map((item, index) =>
        index === existingIndex ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      this.cart.items = [...this.cart.items, { product, quantity: 1 }];
    }
  }

  /**
   * Removes a product-item from the cart or decreases its quantity by 1.
   * 
   * @param product (required) a product to remove from the cart
   * @param removeAllOccurrences (optional) says whether we need to remove all equal products from the cart
   * or just decrease its quantity by 1.
   */
  removeProduct(product: ProductModel, removeAllOccurrences?: boolean): void {
    const existingIndex = this.findIndexByProduct(product);
    if (existingIndex === -1) return;
  
    let currentProductQuantity: number = this.cart.items[existingIndex].quantity;
    if (removeAllOccurrences || currentProductQuantity <= 1) {
      this.cart.items = this.cart.items.filter(item => !item.product.isEqual(product));
    } else {
      this.cart.items = this.cart.items.map((item, index) =>
        index === existingIndex ? { ...item, quantity: item.quantity - 1 } : item
      );
    }
  }

  private findIndexByProduct(product: ProductModel): number {
    return this.cart.items.findIndex((item) => item.product.isEqual(product));
  }
}