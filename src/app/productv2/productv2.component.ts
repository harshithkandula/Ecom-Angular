import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../model/product';

@Component({
  selector: 'app-productv2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productv2.component.html',
  styleUrl: './productv2.component.css'
})
export class Productv2Component implements OnInit {
  product:Product=new Product("Apple Iphone 15", 90000, "https://www.digitaltrends.com/wp-content/uploads/2023/09/iphone-15-pro-max-review-outside-leaves.jpg?resize=625%2C417&p=1");

  f1 = (arg1:string) => { console.log(`inside f1${arg1}`)}

  mytext:string='';

  @Input("name")
  name!:string;

  
  @Input("price")
   price!:string;
  

  ngOnInit():void{
    this.product.name = this.name;
    this.product.Price=Number(this.price);
  }

  @Output()
  abcEvent=new EventEmitter<string>();

  counter:number=0;
  function2emitevt = () => { this.abcEvent.emit("message from child:"+(this.counter++))}
}
