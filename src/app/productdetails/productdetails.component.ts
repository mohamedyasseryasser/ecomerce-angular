import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
 import { UserservicesService } from '../services/userservices.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent implements OnInit{
  loading:boolean=true
  data:any=[]
  currentdata:any=[]
constructor(
  private userservices:UserservicesService,
  private useractive:ActivatedRoute
){
}
  ngOnInit(): void {
     this.getdetails()
  }
getdetails(){
 this.loading=false
  let currentid= Number(this.useractive.snapshot.paramMap.get('id'))
  console.log(currentid)
  this.userservices.getallproducts().subscribe(response=>{
this.loading=true
    this.data=response
  this.currentdata = this.data[currentid - 1]
  })
}
}
