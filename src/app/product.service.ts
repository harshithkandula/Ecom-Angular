import { Injectable } from '@angular/core';
import { Product } from './model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products!:Product[];

  constructor() { 
    this.products=[
      new Product(6,"Apple Mac5", 100000, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbxCAOW85RjWnwajYYOsYXXt6ACOJUYrceKXly9aSriZEZ5bKJIOW1OgUW_GHeKN98TF4&usqp=CAU"),
      new Product(5,"LG Washing", 40000, "https://www.aldahome.com/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/p/8/p8541r3sa-lg-semi-automatic-wm-burgundy_1.jpg"),
      new Product(1, "Lenova Mouse", 500, "https://5.imimg.com/data5/IA/UN/MY-3208689/lenovo-laptops-.png"),
      new Product(2, "Lenova Keyboard", 2500, "https://5.imimg.com/data5/IA/UN/MY-3208689/lenovo-laptops-.png"),
      new Product(3, "HP Laptop", 1500, "https://5.imimg.com/data5/IA/UN/MY-3208689/lenovo-laptops-.png"),
      new Product(4, "Dell Monitor", 3500, "https://5.imimg.com/data5/IA/UN/MY-3208689/lenovo-laptops-.png")
    ]
  }

  // crud
  getProduct = (id:number):Product =>{
    return this.products[id];
  }

  getAllProducts = ():Product[] => {
    return this.products;
  }

  getAllProductsFromTo = (i:number, j:number) => {
    let productPartialList:Product[] = [];
    let counter:number=0;
    for(let a:number=i;a<j;a++){
      productPartialList[counter++]=this.products[a];
    }
  }

  addProduct = (name: string, price: number): void => {
    console.log("Inside Product Service addProduct");
    let new_product: Product = new Product(this.products.length+1, name, price, "");
    this.products.push(new_product);
  }
}
