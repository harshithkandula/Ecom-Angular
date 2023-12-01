import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';
import { Productv2Component } from './productv2/productv2.component';
import { ProductlistComponent } from './productlist/productlist.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProductComponent, UserComponent, Productv2Component, ProductlistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'intro';
}
