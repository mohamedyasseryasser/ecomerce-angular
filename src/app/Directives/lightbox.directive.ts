import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges, input } from '@angular/core';

@Directive({
  selector: '[appLightbox]'
})

export class LightboxDirective implements OnChanges {
  @Input('appLightbox') highlightcolor:string="yellow";
  @Input() dafulecolor:string="darkblue";

  constructor(private elementrf:ElementRef,) {

   }
  ngOnChanges(): void {
    this.elementrf.nativeElement.style.border=`3px solid ${this.dafulecolor}`
  }
   @HostListener('mouseover') onMouseOver(){
    this.elementrf.nativeElement.style.border=`3px solid ${this.highlightcolor}`
    }
    @HostListener('mouseout') onMouseOut(){
     this.elementrf.nativeElement.style.border=`3px solid ${this.dafulecolor}`
     }
}
