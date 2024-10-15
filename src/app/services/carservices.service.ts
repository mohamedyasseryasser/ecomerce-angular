import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import e from 'express';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarservicesService {
subject = new BehaviorSubject<string>('')
user = this.subject.asObservable()

  constructor(private http:HttpClient) {}
  register(model:any){
  return this.http.post(`${environment.APIURL2}register`,model)
  }
  getusersdata(){
    return this.http.get(`${environment.APIURL2}register`)
  }
  login(model:any){
  return this.http.put(`${environment.APIURL2}login/1`, model )
   
  }
  logout(model:any){
    return this.http.put(`${environment.APIURL2}login/1`, model )
      
  }
  currentuser(){
    return this.http.get(`${environment.APIURL2}login/1`)
  }
  getadmin(){
    return this.http.get(`${environment.APIURL2}admin`)
  }
  getbydate(startdate:any,enddate:any){
    return this.http.get(`https://fakestoreapi.com/carts?startdate=${startdate}&enddate=${enddate}`)
    }
    deletedata(id:number){
    return this.http.get(`https://fakestoreapi.com/carts/${id}`)
    }
    view(index:number){
    return this.http.get(`https://fakestoreapi.com/products/${index}`)
    }
    getuserdata(){
      return this.http.get(`https://fakestoreapi.com/carts`)
    }
    isauth(){
       const storage = localStorage.getItem('role')
       if(storage){
        return true
       } else{
        return false
       }
    }
}
