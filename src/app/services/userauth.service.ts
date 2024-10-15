import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


import { environment } from '../../environments/environment.development';

import { UserservicesService } from './userservices.service';

@Injectable({
  providedIn: 'root'
})
export class UserauthService implements OnInit{

userid:number=0

  constructor( private httpclint:HttpClient,
  ) {

  }
  ngOnInit(): void {

  }
login(loginmodel:any):Observable<any>{
return this.httpclint.post<any>(`http://localhost:3000/login`,loginmodel)
}

reject(userrejectL:any):Observable<any>{
return this.httpclint.post<any>(`http://localhost:3000/user`,userrejectL)
}

}
