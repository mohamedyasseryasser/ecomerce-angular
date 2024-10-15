import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CarservicesService } from '../services/carservices.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  
  formgroup!:FormGroup
  users:any[]=[]
  constructor(private router:Router,private fb:FormBuilder,private services:CarservicesService,private toaster:ToastrService){}
  ngOnInit(): void {
    this.formgroup = this.fb.group({
      fname:[''],
      lname:[''],
      email:[''],
      password:['']
    })
    this.services.getusersdata().subscribe((res:any)=>{
      this.users = res
      console.log(this.users)
    })
  }
submit(){
  
    console.log(this.users);
    let index = this.users.findIndex((ele: any) => ele.email === this.formgroup.value.email && ele.password === this.formgroup.value.password);
    if (index === -1) {
      const model = {
        fname: this.formgroup.value.fname,
        lname: this.formgroup.value.lname,
        email: this.formgroup.value.email,
        password: this.formgroup.value.password
      };
      this.services.register(model).subscribe((res: any) => {
        console.log(res);
        this.toaster.success('Registered successfully');
       this.router.navigate(['/home'])
      });
    } else {
      this.toaster.error('This email already exists');
    }
    console.log(index);
  }
  login(){
    this.router.navigate(['/login'])
  }
}