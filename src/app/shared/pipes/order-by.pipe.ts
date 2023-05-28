import { Pipe, PipeTransform } from "@angular/core";
import { ProductModel } from "src/app/products/models/product-model";

@Pipe({
    name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

    transform(value: ProductModel[] | null, criteria: string[], isAsc: boolean = true): ProductModel[] | undefined {
        return value?.sort(
            this.comparatorBuilder(criteria, isAsc));
    }

    getCriteriaToSort(): String[] {
        return Array.from(this.comparatorMap.keys());
    }

    private comparatorMap: Map<String, (p1: ProductModel, p2: ProductModel) => number> = new Map([
        ['name', (p1, p2) => p1.name < p2.name ? -1 : p1.name > p2.name ? 1 : 0 ],
        ['price', (p1, p2) => p1.price - p2.price],
        ['isAvailable', (p1, p2) => -(+p1.isAvailable - +p2.isAvailable)]
    ]);

    private comparatorBuilder(criteria: string[], isAsc: boolean): ((p1: ProductModel, p2: ProductModel) => number) | undefined {
        return (p1, p2) => {
            for (const key of criteria) {
                const comparator = this.comparatorMap.get(key);
                if (comparator) {
                    const result = comparator(p1, p2);
                    if (result !== 0) {
                        return isAsc ? result : -result;
                    }
                }
            }
            return 0;
        };
    }

}