import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';
import { Productv2Component } from './productv2/productv2.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { Product } from './model/product';
import { Productlistv3Component } from './productlistv3/productlistv3.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { Productv4Component } from './productv4/productv4.component';
import { Productlistv4Component } from './productlistv4/productlistv4.component';
import { HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProductComponent, UserComponent, Productv2Component, ProductlistComponent, Productlistv3Component, AddproductComponent, Productv4Component, Productlistv4Component, HttpClientModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'intro';
 
  varx=true;
  parentFunctionf1 = (evt:any) =>alert("Inside parent function f1()"+evt)

  //ng switch director demo
  arr:number[]=[];
  arrlen: number[]=[];

  getLength(){

  }
}
