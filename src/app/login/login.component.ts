import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CarservicesService } from '../services/carservices.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
formgroup!:FormGroup
users:any[]=[]
admin!:any
  constructor(private fb:FormBuilder,private services:CarservicesService,private toaster:ToastrService,private router:Router){}

  ngOnInit(): void {
    this.formgroup = this.fb.group({
    email:new FormControl('',Validators.required),
    password:new FormControl('',[Validators.required,Validators.email]),
    })
    this.services.getusersdata().subscribe((res:any)=>{
     this.users = res
    })
    this.services.getadmin().subscribe((res:any)=>{
     this.admin = res
     console.log(this.admin)
    })
  }
submit(){
  
  let adminindex = this.admin.findIndex((ele:any)=> ele.email === this.formgroup.value.email && ele.password === this.formgroup.value.password)
  let index = this.users.findIndex((ele:any)=> ele.email === this.formgroup.value.email && ele.password === this.formgroup.value.password)
  if(index !== -1){
    const model = {
      email:this.formgroup.value.email,
      password:this.formgroup.value.password, 
      id:this.users[index].id,
      role:'user'
     }
  this.services.login(model).subscribe((res:any)=>{
  this.services.subject.next('user')
  localStorage.setItem('role','user')
  this.toaster.success('successfully')
  this.router.navigate(['/home'])
  })
  }
  else if(adminindex !== -1){
    const model = {
      email:this.formgroup.value.email,
      password:this.formgroup.value.password, 
      id:this.admin[adminindex].id,
      role:this.admin[0].role
     }
  this.services.login(model).subscribe((res:any)=>{
    this.services.subject.next(this.admin[0].role)
    localStorage.setItem('role',this.admin[0].role)
  this.toaster.success('successfully admin')
  this.router.navigate(['/orders'])
  })
  }
  else{
    this.toaster.error('this email is not founded')
  }
  }
  }


