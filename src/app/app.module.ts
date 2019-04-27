import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {ProductListComponent} from './products/product-list/product-list.component';
import {FormsModule} from '@angular/forms';
import {ConvertToSpacesPipe} from './shared/pipes/convert-to-spaces.pipe';
import {StarComponent} from './shared/components/star/star.component';
import {HttpClientModule} from '@angular/common/http';
import {ProductDetailComponent} from './products/product-detail/product-detail.component';
import {WelcomeComponent} from './home/welcome.component';
import {RouterModule, Routes} from '@angular/router';
import {ProductDetailGuard} from './products/product-detail.guard';

const routes: Routes = [
    {path: 'products', component: ProductListComponent},
    {path: 'products/:id', component: ProductDetailComponent, canActivate: [ProductDetailGuard]},
    {path: 'welcome', component: WelcomeComponent},
    {path: '', redirectTo: 'welcome', pathMatch: 'full'},
    {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
];

@NgModule({
    declarations: [
        AppComponent,
        ProductListComponent,
        ConvertToSpacesPipe,
        StarComponent,
        ProductDetailComponent,
        WelcomeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(routes)
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
