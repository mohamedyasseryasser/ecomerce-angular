import { Injectable } from '@angular/core';
import { catlist, custom } from '../components/header/header';


 @Injectable({
  providedIn: 'root'
})
export class StaticproductService {
  ordertotalprice:number=0
  cats:catlist[]
  constructor() {
    this.cats = [
      new catlist(32143423341,'ali','tanta',0,1000),
      new catlist(32143423342,'mohamed','tanta',1,1300),
      new catlist(32143423343,'mohamed','tanta',2,1400),
      new catlist(32143423344,'mohamed','tanta',3,1500),
      new catlist(32143423345,'mohamed','tanta',4,1600),
    ]
  }
getallproperty():catlist[]{
return this.cats
}
getproductsbycatid(cid:number):catlist[]{
  if(cid==0)
  return this.cats
else
return this.cats.filter(cat=>cat.id == cid)
}
getpropertybyid(pid:Number):catlist | null {
  let foundproduct = this.cats.find(cat=>cat.id==pid)
  return foundproduct? foundproduct: null;
}
getid():Number[]{
  let id:Number[] = this.cats.map(prd=>prd.id)
  return id
  
}
}
