import { Component, OnInit } from '@angular/core';
import { GenerateserviceService } from '../services/generateservice.service';
import { UserauthService } from '../services/userauth.service';
import { UserservicesService } from '../services/userservices.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-jewelery',
  templateUrl: './jewelery.component.html',
  styleUrl: './jewelery.component.css'
})
export class JeweleryComponent implements OnInit{
searchText:string=''
catvalue:any 
catdata:any[]=[]
localstorag:any[]=[]
produsts:any[]=[] 
origindata:any[]=[]
 constructor(private router:Router,private generateservices:GenerateserviceService,private userservices:UserservicesService){}
 ngOnInit(): void {
  console.log(this.catvalue);
  this.generateservices.user.subscribe((res: any) => {
    this.catvalue = res;
    this.getcatdata();
  });
  const storedCategory = localStorage.getItem('catdata');
  if (storedCategory) {
    this.catvalue = storedCategory;
    this.getcatdata();
  }
}
getcatdata() {
  this.userservices.getcurrentcat(this.catvalue).subscribe((res:any) => {
    this.catdata = res || [];
  this.origindata = [...this.catdata] 
  });
}
change(event:any){
  if ("token" in localStorage) {
    this.localstorag = JSON.parse(localStorage.getItem("token")!);
    const exit = this.localstorag.find((ele:any)=>ele.item.id==event.item.id)
    if(exit){
      alert("rewtet")
    }else{
       this.localstorag.push(event)
    localStorage.setItem("token", JSON.stringify(this.localstorag));
    this.router.navigate(['/productdetails',event.item.id])
    }
  }
   else {
    this.localstorag.push(event);
    localStorage.setItem("token", JSON.stringify(this.localstorag));
   this.router.navigate(['/productdetails',event.item.id])
  }
}
 search(){
  console.log(this.catdata)
  if(this.searchText !== ''){
    this.catdata = this.origindata.filter((item:any)=>{
      return item.title.toLowerCase().includes(this.searchText.toLowerCase())
    })
  }else{
    this.catdata = this.origindata
  }
 }
}