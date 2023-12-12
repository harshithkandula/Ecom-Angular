import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Productv4Service } from '../productv4.service';
import { Productv4 } from '../model/productv4';

@Component({
  selector: 'app-productv4',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productv4.component.html',
  styleUrl: './productv4.component.css'
})
export class Productv4Component {
  product!: Productv4;
  productService: Productv4Service;

  @Input('productId') productId!: string;

  constructor(productService: Productv4Service) {
    this.productService = productService;
  }


  ngOnInit(): void {
    this.productService.getProduct(this.productId)
      .subscribe(
        product => {
          this.product = product;
        },
        error => {
          console.error(`Error ${error} fetching product with id=${this.productId}:`);
        });
  }
}
