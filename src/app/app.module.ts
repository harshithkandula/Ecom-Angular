import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';
import { Productv2Component } from './productv2/productv2.component';
import { ProductlistComponent } from './productlist/productlist.component';


@NgModule({
    declarations: [
      AppComponent,
      ProductComponent,
      UserComponent,
      Productv2Component,
      ProductlistComponent
    ],
    imports: [],
    exports:[],
    bootstrap: [AppComponent]
})
export class AppModule { }