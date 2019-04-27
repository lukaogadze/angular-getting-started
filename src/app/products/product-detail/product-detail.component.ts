import {Component, OnInit} from '@angular/core';
import {ProductModel} from '../product.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
    readonly title: string;
    product: ProductModel | undefined;

    constructor(private readonly _activatedRoute: ActivatedRoute,
                private readonly _router: Router) {
        this.title = "Product Detail"
    }

    onBack(): void {
        this._router.navigate(["/products"]);
    }

    ngOnInit() {
        const id: number = +this._activatedRoute.snapshot.paramMap.get("id")!;
        this.product =     {
            "id": 5,
            "name": "Hammer" + ` ${id}`,
            "code": "TBX-0048",
            "releaseDate": "May 21, 2016",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "../../assets/images/Hammer.png"
        };
    }

}
