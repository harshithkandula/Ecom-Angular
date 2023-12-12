import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Productlistv4Component } from './productlistv4/productlistv4.component';

export const routes: Routes = [
    {path:'home', component: AppComponent},
    {path: 'product-list', component: Productlistv4Component}
];
