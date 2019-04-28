import {Component, OnInit} from '@angular/core';
import {ProductModel} from '../product.model';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../product.service';

@Component({
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
    readonly title: string;
    product: ProductModel | undefined;
    errorMessage: string | undefined;

    constructor(private readonly _activatedRoute: ActivatedRoute,
                private readonly _router: Router,
                private readonly _productService: ProductService) {
        this.title = "Product Detail"
    }


    ngOnInit() {
        const param = this._activatedRoute.snapshot.paramMap.get("id");
        if (param) {
            const id = +param;
            this.getProduct(id);
        }
    }

    private getProduct(id: number): void {
        this._productService.getProduct(id).subscribe(
            product => this.product = product,
            err => this.errorMessage = err
        );
    }

    onBack(): void {
        this._router.navigate(["/products"]);
    }
}
