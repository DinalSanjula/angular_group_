import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductBComponent} from "./product-b/product-b.component";
import {ProductsComponent} from "./products/products.component";

@NgModule({
  declarations: [
    ProductsComponent,
    ProductBComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductsComponent,
    ProductBComponent
  ]
})
export class ProductModule { }
