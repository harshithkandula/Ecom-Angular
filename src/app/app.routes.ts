import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Productlistv4Component } from './productlistv4/productlistv4.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { Productv4Component } from './productv4/productv4.component';
import { NosuchComponent } from './nosuch/nosuch.component';

export const routes: Routes = [
    {path:'home', component: AppComponent},
    {path: 'product-list', component: Productlistv4Component},
    {path: 'add-product', component: AddproductComponent},
    {path: 'product/:productId', component: Productv4Component},
    {path: '*', component: NosuchComponent}
];
