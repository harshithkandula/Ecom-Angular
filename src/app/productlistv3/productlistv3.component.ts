import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-productlistv3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productlistv3.component.html',
  styleUrl: './productlistv3.component.css'
})
export class Productlistv3Component implements OnInit{
  products!:Product[];
  productService: ProductService

  constructor(productService: ProductService){
    this.productService=productService;
  }

  ngOnInit(): void {
      this.products=this.productService.getAllProducts();
  }

}
