import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pro-parent',
  templateUrl: './pro-parent.component.html',
  styleUrls: ['./pro-parent.component.css']
})
export class ProParentComponent {

  @ViewChild('headlines') 
  element!:ElementRef;

  show()
  {
    console.log(this.element.nativeElement)
  }


}
