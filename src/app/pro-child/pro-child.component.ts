import { Component, ContentChild, ElementRef, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pro-child',
  templateUrl: './pro-child.component.html',
  styleUrls: ['./pro-child.component.css']
})
export class ProChildComponent implements OnInit,OnChanges,OnDestroy{

  @ContentChild('headlines')
  element!:ElementRef;

  show()
  {
    console.log(this.element);
    console.log(this.element.nativeElement);
  }

  ngOnInit():void{
    console.log('from ngOnInit().....');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('From ngOnChanges()...')
  }

  ngOnDestroy(): void {
    console.log('From ngOnDestroy()...')
  }

  ngDoCheck(){
    console.log('from ngCheck...')
  }

  ngAfterContentChecked()
  {
    console.log('from ngAfterContentCheck')
  }
  ngAfterViewChecked()
  {
    console.log('from ngAfterViewCheck')
  }



}
