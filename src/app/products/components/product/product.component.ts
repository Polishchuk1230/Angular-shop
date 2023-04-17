import { Component, Input } from '@angular/core';
import { ProductModel } from '../../models/product-model';
import { CartService } from 'src/app/cart/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: ProductModel | undefined = undefined;

  constructor(private cartService: CartService) {}

  onAddToCart() {
    if (!this.product) {
      return;
    }
    this.cartService.addProduct(this.product)
    console.log("You have bought " + this.product.name + ". You have to pay " + this.product.price)
  }
}
