import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';
import { Productv2Component } from './productv2/productv2.component';
import { ProductlistComponent } from './productlist/productlist.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from './product.service';
import { ProductV3Component } from './product-v3/product-v3.component';
import { Productlistv3Component } from './productlistv3/productlistv3.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { Productv4Component } from './productv4/productv4.component';
import { Productlistv4Component } from './productlistv4/productlistv4.component';
import { Productv4Service } from './productv4.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

imports: [FormsModule, BrowserModule, ReactiveFormsModule]

@NgModule({
    declarations: [
      AppComponent,
      ProductComponent,
      UserComponent,
      Productv2Component,
      ProductlistComponent,
      ProductV3Component,
      Productlistv3Component,
      AddproductComponent,
      Productv4Component,
      Productlistv4Component
    ],
    providers: [ProductService, Productv4Service],
    imports: [FormsModule, BrowserModule, HttpClientModule, ReactiveFormsModule, RouterModule],
    exports:[RouterModule],
    bootstrap: [AppComponent]
})
export class AppModule { }