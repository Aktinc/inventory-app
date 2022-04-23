import { isNull } from "@angular/compiler/src/output/output_ast";
import { Component, EventEmitter, Output } from "@angular/core";
import { Product } from "./product";

@Component({
    selector: 'products-list',
    templateUrl: 'products-list.component.html',
    styleUrls: ['products-list.component.css'],
    inputs: ['productsList'] // 提供输入项名称
})
export class ProductsListComponent {
    productsList!: Product[]; // 提供输入项的属性
    @Output() productSelected: EventEmitter<Product>;
    currentProduct: Product = null;
    constructor() {
        this.productSelected = new EventEmitter();
    }
    onProductClicked(product: Product) {
        this.currentProduct = product;
        this.productSelected.emit(product);
    }

    isSelected(product: Product) {
        if (this.currentProduct === null || product === null) {
            return false;
        }
        return product.sku === this.currentProduct.sku;
    }
}