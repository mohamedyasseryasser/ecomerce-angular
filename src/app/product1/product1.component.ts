import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrl: './product1.component.css'
})
export class Product1Component {

@Input() data:any={};
@Output() prodetails = new EventEmitter()
loading:boolean=true
inputValue:number=0
constructor(){

}
add(){
this.prodetails.emit({item:this.data,quantity:this.inputValue})

}
buy(){
  this.loading=false
} 

}
 