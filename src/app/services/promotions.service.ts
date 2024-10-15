import { Injectable } from '@angular/core';
import { Observable, from, observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromotionsService {
adlist:string[]=[]
  constructor( ){
this.adlist=[
  "ali",
  "sara",
  "ahmed",
  "omar",
  "sama"
]
   }
getschudalads(interval:number):Observable<string>{
  return new Observable<string>((observer)=>{
    let count=0
    let adtimer=setInterval(()=>{
      if(count<this.adlist.length){
    observer.next(this.adlist[count])
    count++;}
    if(count==this.adlist.length){
    observer.complete()
    }
    if(this.adlist[count]==""){
    observer.error()
    }
    },interval*1000)
    return{
      unsubscribe() {
        observer.complete()
        console.log("clearinterval ")
      },
    }
  })
}
}
