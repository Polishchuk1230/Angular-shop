export class ProductModel {
    constructor(
        public name: string,
        public price: number,
        public isAvailable: boolean
    ) {}

    isEqual(object: ProductModel): boolean {
        return this.name === object.name &&
          this.price === object.price &&
          this.isAvailable === object.isAvailable
    }
}