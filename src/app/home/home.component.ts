import { Component, OnInit } from '@angular/core';
import { UserservicesService } from '../services/userservices.service';
import { Router } from '@angular/router';
import { CarservicesService } from '../services/carservices.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
cats:any[]=[]
mensclothes:any[]=[]
jewelery:any[]=[]
electronices:any[]=[]
womans:any[]=[]
id:any
   constructor(private route:Router,private userservices:CarservicesService,private services:UserservicesService){
}
  ngOnInit(): void {
this.getallcat()
this.getmens()
this.getjel()
this.getelectronices()
this.getwomans()


   }
getallcat(){
this.services.getallcatogerious().subscribe((res:any)=>{
 this.cats=res
console.log(this.cats)
})
}
getmens(){
  this.services.getcurrentcat("men's clothing").subscribe((res:any)=>{
    this.mensclothes=res
    console.log(res)
  })
}
getjel(){
  this.services.getcurrentcat("jewelery").subscribe((res:any)=>{
    this.jewelery=res
    console.log(res)
  })
}
getelectronices(){
  this.services.getcurrentcat("electronics").subscribe((res:any)=>{
  this.electronices = res
  })
}
getwomans(){
  this.services.getcurrentcat("women's clothing").subscribe((res:any)=>{
  this.womans = res
  })
}
productdetails(item:any){
console.log(item.id)
this.id = item.id
this.route.navigate(['productdetails',this.id])
}

}
