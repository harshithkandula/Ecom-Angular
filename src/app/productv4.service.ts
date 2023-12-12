import { Injectable } from '@angular/core';
import { Productv4 } from './model/productv4';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Productv4Service {

  private appurl="https://dummyjson.com/products";
  private httpClient:HttpClient;

  products!: Productv4[];

  constructor(httpClient:HttpClient) {
    this.httpClient=httpClient;
   }

   getAllProducts = (): Observable<Productv4[]> => {
    return this.httpClient.get<{ products: Productv4[] }>(this.appurl).pipe(map(response => response.products));
  }

  getProduct(id: string): Observable<Productv4> {
    return this.httpClient.get<Productv4>(this.appurl + "/" + id);
  }

}
