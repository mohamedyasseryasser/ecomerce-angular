import { Component, OnInit } from '@angular/core';
import { GenerateserviceService } from '../services/generateservice.service';
import { CarservicesService } from '../services/carservices.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

value:any 
emptyarray:any
role!:string
storage:any ='user'
 constructor(private generateservices:GenerateserviceService,private services:CarservicesService){
  
  if(this.storage){
  this.services.subject.next(this.storage)
  }
}
  ngOnInit(): void {
    
    this.storage = localStorage.getItem('role')
  console.log(this.storage)
      this.getrole()
    }
getrole(){
this.services.user.subscribe((res: any) => {
    this.role = res;
    console.log(this.role);
});
}
getvalue(event:any){
this.value = event.target.attributes.value.value
console.log(this.value)
this.generateservices.subject.next(this.value)
localStorage.setItem('catdata',this.value)
}
logout(){
  localStorage.setItem('role','')
  this.emptyarray = {}
  console.log('logut')
 this.services.logout(this.emptyarray).subscribe((res:any)=>{
  //window.location.reload()
  })
}
}