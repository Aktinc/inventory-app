import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductDepartmentComponent } from './product-department.component';
import { ProductImageComponent } from './product-image.component';
import { ProductPriceComponent } from './product-price.component';
import { ProductRowComponent } from './product-row.component';
import { ProductsListComponent } from './products-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductDepartmentComponent,
    ProductImageComponent,
    ProductPriceComponent,
    ProductRowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
