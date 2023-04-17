import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ProductModel } from 'src/app/products/models/product-model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent {
  constructor(private cartService: CartService) {}

  getProducts(): ProductModel[] {
    return this.cartService.getProducts()
  }

  getSumPrice(): Number {
    return this.cartService.getSumPrice()
  }

  isEmpty(): boolean {
    return this.cartService.isEmpty()
  }
}
