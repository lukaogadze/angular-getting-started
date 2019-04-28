import {Observable, throwError} from 'rxjs';
import {ProductModel} from './product.model';
import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private readonly _productUrl: string;

    constructor(private readonly _httpService: HttpClient) {
        this._productUrl = 'api/products/products.json';
    }

    getProduct(id: number): Observable<ProductModel | undefined> {
        return this.getProducts()
            .pipe(map(products => products.find(x => x.id == id)));
    }

    getProducts(): Observable<ReadonlyArray<ProductModel>> {
        return this._httpService.get<ReadonlyArray<ProductModel>>(this._productUrl)
            .pipe(catchError(this.handleError));
    }

    private handleError(err: HttpErrorResponse): Observable<never> {
        let errorMessage: string;

        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            errorMessage = `Server returned code: ${err.status}, error message is ${err.message}`;
        }

        console.log(errorMessage);
        return throwError(errorMessage);
    }
}
