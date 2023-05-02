import { ProductModel } from "src/app/products/models/product-model";

export type CartItem = {
    product: ProductModel,
    quantity: number
}

export interface CartModel {
    items: CartItem[]
}