import {NgModule} from '@angular/core';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ConvertToSpacesPipe} from '../shared/pipes/convert-to-spaces.pipe';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';


@NgModule({
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
        ConvertToSpacesPipe
    ],
    imports: [
        SharedModule,
        ProductRoutingModule
    ]
})
export class ProductModule {
}
