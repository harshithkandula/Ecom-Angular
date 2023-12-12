import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Productv4 } from '../model/productv4';
import { Productv4Service } from '../productv4.service';

@Component({
  selector: 'app-productlistv4',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productlistv4.component.html',
  styleUrl: './productlistv4.component.css'
})
export class Productlistv4Component {
  products:Productv4[]=[];
  productService: Productv4Service;

  constructor(productService: Productv4Service){
    this.productService=productService;
  }

  ngOnInit(): void {
      this.productService.getAllProducts().subscribe(
        products => {
          this.products = products;
        },
        error => {
          console.error('Error fetching products:', error);
        }
      );
  }


}
