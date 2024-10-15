import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';
 
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { json } from 'stream/consumers';
import { environment } from '../../environments/environment.development';
import { products } from '../admin/products/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private HTTP_OPTIONS = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // Add any other headers here
    })
  };
  constructor(private http:HttpClient) {

    }

  
addproduct(newprd:any):Observable<any>{
 return this.http.post<any>('http://localhost:3000/products',JSON.stringify(newprd),this.HTTP_OPTIONS)
}
getallproducts():Observable<products[]>{
  return this.http.get<products[]>(`https://fakestoreapi.com/products`) 
  }
  getallcatogerious(){
    return this.http.get(`https://fakestoreapi.com/products/categories`)
  }
  getcurrentcat(keyword:any){
    return this.http.get(`${environment.APIURL}products/category/${keyword}`)
  }
  addcarts(model:any){
    return this.http.post(`https://fakestoreapi.com/carts`,model)
  }
  addproducts(model:products):Observable<products>{
  return this.http.post<products>(`https://fakestoreapi.com/products`,model)
  }
}
