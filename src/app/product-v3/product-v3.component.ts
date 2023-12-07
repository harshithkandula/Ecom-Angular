import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../model/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-v3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-v3.component.html',
  styleUrl: './product-v3.component.css'
})
export class ProductV3Component {

  product!:Product;
  productService: ProductService
  constructor(productService: ProductService){
    this.productService=productService;
    this.product=this.productService.getProduct(1);
  }

  @Input("id")
  id:string='';

  ngOnInit():void{
    this.product.id=Number(this.id)
    this.product=this.productService.getProduct(this.product.id);
  }

}
