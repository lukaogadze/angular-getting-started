import {Component} from '@angular/core';
import {products} from '../../../api/products/products.data';
import {ProductListModel} from './product-list.model';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
    readonly title: string;
    readonly products: ReadonlyArray<ProductListModel>;
    showImage: boolean;
    filteredProducts: ReadonlyArray<ProductListModel> | undefined;

    private _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    constructor() {
        this.title = 'Product List';
        this.products = products;
        this.filteredProducts = this.products;
        this.showImage = false;
        this._listFilter = '';
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    private performFilter(filter: string): ReadonlyArray<ProductListModel> {
        const filterBy = filter.toLocaleLowerCase();
        const filteredProducts = this.products.filter(x => x.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
        return filteredProducts;
    }
}
