import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-addproduct',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent {
  productForm!:FormGroup;

  isProductNameInvalid: boolean = false;
  isProductPriceInvalid: boolean = false;

  products!:Product;
  productServices!: ProductService;

  constructor(private fb: FormBuilder, private productService: ProductService){
    this.productForm=this.fb.group(
      {
        productName: ['',[Validators.required, Validators.minLength(3)]],
        productPrice: ['',[Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/), Validators.max(100000)]]
      }
    );
    this.productServices=productService;
  }

  addProduct():void{
    console.log("Inside addProduct()");
    this.productService.addProduct(this.productForm.value.productName,Number(this.productForm.value.productPrice));
  }


}
