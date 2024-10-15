import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UserservicesService } from '../services/userservices.service';
import { CarservicesService } from '../services/carservices.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrl: './carts.component.css'
})
export class CartsComponent implements OnInit{

  local:any[]=[]
  total:number=0
  success:boolean=false
  login!:any
constructor(private userservice:UserservicesService,private services:CarservicesService,private toaster:ToastrService){}
  ngOnInit(): void {
    this.getlocal()
    this.services.currentuser().subscribe((res:any)=>{
      this.login = res
     console.log(this.login)
    })
}

getlocal(){
  this.local=JSON.parse(localStorage.getItem('token')!)
  this.gettotal()
}
minus(index:number){
this.local[index].quantity++
this.gettotal()
localStorage.setItem("token", JSON.stringify(this.local));
}
plus(index:number){
this.local[index].quantity-- 
this.gettotal()
localStorage.setItem("token", JSON.stringify(this.local));
}
gettotal(){
  this.total=0
   for(let i in this.local){
    this.total += this.local[i].quantity * this.local[i].item.price;
  }
}
cleardata(){ 
  this.local.splice(0)
  
  localStorage.setItem("token", JSON.stringify(this.local));
  
}
delete(index:number){
this.local.splice(index,1)
this.gettotal()
localStorage.setItem("token", JSON.stringify(this.local));
}
getcart() {

if(this.login.email === undefined && this.login.password === undefined){
  this.success = false
  this.toaster.error('you don not have account')

}else{
  let arrayid = this.local.map((ele: any) => ({
    productid: ele.item.id,
   quantity: ele.quantity
 }));
 let model = {
   products: arrayid, 
   userid: 5,
   data: new Date()
 };
 console.log(model);
 this.userservice.addcarts(model).subscribe((response)=>{
   this.success=true
 })
}
}
}
