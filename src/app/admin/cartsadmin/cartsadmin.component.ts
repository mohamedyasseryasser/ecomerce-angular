import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { start } from 'repl';
import { CarservicesService } from '../../services/carservices.service';


@Component({
  selector: 'app-cartsadmin',
  templateUrl: './cartsadmin.component.html',
  styleUrl: './cartsadmin.component.css'
})
export class CartsadminComponent implements OnInit{
  local:any=[]
  startdate:any=[]
  formgroup:FormGroup
  products:any=[]
  productid:any
  cartproducts:any=[]
  arr:any=[]
  totale:number=0
  constructor(private userservice:CarservicesService,private br:FormBuilder){
    this.formgroup=this.br.group({
      start:[''],
      end:['']
    })
  } 
    ngOnInit(): void {
      this.getuserdata()
     }
  
  getuserdata(){
    this.userservice.getuserdata().subscribe(response=>{
      //console.log(response)
    this.local=response
  
  
  })
  }
  delete(index:number){
     this.local.splice(index,1)
  
  
  }
  submit(){
  this.startdate = this.formgroup.get('start')?.value
  console.log(this.startdate)
  let enddate = this.formgroup.get('end')?.value 
  console.log(enddate)
  this.userservice.getbydate(this.startdate,enddate).subscribe(res=>{
    console.log(res)
  
  })
  }
  deletedata(index:number){
    this.userservice.deletedata(index).subscribe(res=>{ 
      this.local.splice(index,1)
     // this.getuserdata()
      console.log(this.local)
      console.log(res)
    })
  }
  view(index:number){
  this.products = this.local[index ].products
  console.log(this.products)
  for(let i=0;i<this.products.length; i++){
    this.productid=this.products[i]
  console.log(this.productid)
  this.userservice.view(this.productid.productId).subscribe(res=>{
  this.arr.push(res)
  })
  }
  this.arr=[]
  console.log(this.arr)
  }
  
 }
 
 