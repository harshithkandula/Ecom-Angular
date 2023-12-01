import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../model/product';

@Component({
  selector: 'app-productv2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productv2.component.html',
  styleUrl: './productv2.component.css'
})
export class Productv2Component {
  product:Product=new Product("Apple Iphone 15", 90000, "https://www.digitaltrends.com/wp-content/uploads/2023/09/iphone-15-pro-max-review-outside-leaves.jpg?resize=625%2C417&p=1");

}
