import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';




 @Injectable({
  providedIn: 'root'
})
export class UserservicesService {
constructor(private http:HttpClient){}
getallproducts(){
return this.http.get(`${environment.APIURL}products`)
}
getallcatogerious(){
  return this.http.get(`${environment.APIURL}products/categories`)
}
getcurrentcat(keyword:any){
  return this.http.get(`${environment.APIURL}products/category/${keyword}`)
}
addcarts(model:any){
  return this.http.post(`https://fakestoreapi.com/carts`,model)
}

}
