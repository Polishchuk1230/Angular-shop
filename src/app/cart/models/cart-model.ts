import { ProductModel } from "src/app/products/models/product-model";

// Обычно, еще указывают количество купленого товара
export interface CartModel {
    products: ProductModel[];
}
