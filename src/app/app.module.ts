import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';
import { Productv2Component } from './productv2/productv2.component';
import { ProductlistComponent } from './productlist/productlist.component';

import { FormsModule } from '@angular/forms';
import { ProductService } from './product.service';
import { ProductV3Component } from './product-v3/product-v3.component';
imports: [FormsModule, BrowserModule]

@NgModule({
    declarations: [
      AppComponent,
      ProductComponent,
      UserComponent,
      Productv2Component,
      ProductlistComponent,
      ProductV3Component
    ],
    providers: [ProductService],
    imports: [],
    exports:[],
    bootstrap: [AppComponent]
})
export class AppModule { }