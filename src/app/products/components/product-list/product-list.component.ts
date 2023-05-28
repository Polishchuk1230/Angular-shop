import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product-model';
import { ProductService } from '../../services/product.service';
import { CartService } from 'src/app/cart/services/cart.service';
import { OrderByPipe } from 'src/app/shared/pipes/order-by.pipe';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  selectedSortParam!: string;
  isAsc: boolean = true;

  constructor(
    public orderByPipe: OrderByPipe,
    public productService: ProductService,
    private cartService: CartService
  ) {}

  onAddToCart(product: ProductModel) {
    if (product.isAvailable) {
      this.cartService.addProduct(product)
      console.log("You have bought " + product.name + ". You have to pay " + product.price)
    }
  }

  onSortParamChange(event: any) {
    this.selectedSortParam = event.target.value;
  }

}
