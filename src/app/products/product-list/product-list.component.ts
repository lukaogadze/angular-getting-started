import {Component, OnInit} from '@angular/core';
import {ProductModel} from '../product.model';
import {ProductService} from '../product.service';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
    title: string;
    showImage: boolean;
    errorMessage: string | undefined;
    products: ReadonlyArray<ProductModel> | undefined;
    filteredProducts: ReadonlyArray<ProductModel> | undefined;

    private _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    constructor(private readonly _productService: ProductService) {
        this.title = 'Product List';
        this.showImage = false;
        this._listFilter = '';
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }


    private performFilter(filter: string): ReadonlyArray<ProductModel> {
        const filterBy = filter.toLocaleLowerCase();
        const filteredProducts = this.products!.filter(x => x.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
        return filteredProducts;
    }

    onRatingClicked(message: string): void {
        this.title = `Product List: ${message}`;
    }

    ngOnInit(): void {
        this._productService.getProducts().subscribe(products => {
                this.products = products;
                this.filteredProducts = this.products;
            }, err => this.errorMessage = err);
    }
}
