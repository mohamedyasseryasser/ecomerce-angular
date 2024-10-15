import { Component, EventEmitter, Input, Output, input } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.css'
})
export class SelectComponent {
@Input() title:string='';
@Input()data:any[]=[];
@Input()  selectbydata:any="all"
@Output() selectbycat = new EventEmitter()
constructor(){

} 
changes(event:any){
this.selectbycat.emit(event)
}
}
 