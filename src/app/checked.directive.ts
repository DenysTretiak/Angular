import { Directive,Input, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appChecked]'
})
export class CheckedDirective {
 @HostBinding(`class.checked`) checked:boolean;
 @HostListener('click') onClick(){
     this.checked = !this.checked;
  }
}
