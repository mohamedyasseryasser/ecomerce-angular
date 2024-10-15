import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { products } from './products';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  user:products[]=[]
  form:any=[]
  cats:any=[]
  formgroup!:FormGroup
    constructor(private userservice:ProductsService,private fb:FormBuilder){}
   
    ngOnInit(): void {
      this.formgroup=this.fb.group({
       title: [''],
       price: [''],
       description: [''],
       image: [''],
       category: ['']
      })
       this.getallproducts()
       this.getallcatqoary()
   
     }
   getallproducts(){
     this.userservice.getallproducts().subscribe((res:any)=>{
      this.user=res
      console.log(this.user)
     })
   }
   addproduct(){
     this.form=this.formgroup.value
     this.userservice.addproducts(this.form).subscribe((res:any)=>{
       console.log(res)
     })
   }
   getallcatqoary(){ 
     this.userservice.getallcatogerious().subscribe((res:any)=>{
      this.cats=res
      console.log(this.cats)
     })
   }
   changes(event:any){
     this.formgroup.get('category')?.setValue(event.target.value)
   console.log(this.formgroup)
   }
   updateproduct(item:any){
   this.formgroup.patchValue({
     title: item.title,
       price: item.price,
       description: item.description,
       image: item.image,
       category: item.category
   })

   }
   open(){
    this.formgroup.reset()
   }
}
