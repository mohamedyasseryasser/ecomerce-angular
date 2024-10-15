import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UserservicesService } from '../services/userservices.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrl: './allproducts.component.css'
})
export class AllproductsComponent implements OnInit,OnChanges{
user:any=[]
catlist:any=[]
catogarylist:any=[]
selectbycat:number=0
loading:boolean=false
lood:boolean=true
//localstorag:any[]=[]
localstorag:any=[]
  constructor(private userservices:UserservicesService,
    private roter:Router,private useractive:ActivatedRoute
  ){

}
  ngOnChanges(changes: SimpleChanges): void { 

  }
  ngOnInit(): void {
  this.gatallcatogry()
  this.getallproducts()
  }
getallproducts(){
  this.loading=true
  this.userservices.getallproducts().subscribe(response=>{
    console.log(response)
    this.user=response
    this.loading=false
  })
}
gatallcatogry(){
  this.loading=true
  this.userservices.getallcatogerious().subscribe(response=>{
   this.catlist=response
    console.log(response)
    this.loading=false
  })
}
filterproducts(keyword:any){
  this.loading=true
this.userservices.getcurrentcat(keyword).subscribe(response=>{
this.user=response
this.loading=false
})
}
changes(event:any){
  let value = event.target.value
  console.log(value);
  (value=="all") ? this.getallproducts():  this.filterproducts(value)
}
add(event: any) {
   if ("token" in localStorage) {
    this.localstorag = JSON.parse(localStorage.getItem("token")!);
    const exit = this.localstorag.find((ele:any)=>ele.item.id==event.item.id)
    if(exit){
      alert("rewtet")
    }else{
       this.localstorag.push(event)
    localStorage.setItem("token", JSON.stringify(this.localstorag));
    this.roter.navigate(['/productdetails',event.item.id])
    }
  }
   else {
    this.localstorag.push(event);
    localStorage.setItem("token", JSON.stringify(this.localstorag));
   this.roter.navigate(['/productdetails',event.item.id])
  }
}
}
