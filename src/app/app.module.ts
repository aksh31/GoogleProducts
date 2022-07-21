import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { GoogleProductsComponent } from './google-products/google-products.component';
import { ProductCardComponent } from './google-products/product-card/product-card.component';
import { ProductComponent } from './google-products/product/product.component';


const appRoutes : Routes = [
  {path : '', redirectTo : 'products', pathMatch : 'full'},
  {path : 'products', component : GoogleProductsComponent},
  {path : 'product/:name', component : ProductComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    GoogleProductsComponent,
    ProductCardComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
