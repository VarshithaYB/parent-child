import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  
  title='parentchild';
  EnterName='John Doe';
  EnterAge="22";
  EnterStatus="Single";
  Enterdob="13-03-2003"
  // EnterOccupation:"Working";
  parentData1="";
  parentData2="";
  parentData3="";
  parentData4="";

  transferData()
  {
    this.parentData1=this.EnterName;
    this.parentData2=this.EnterAge;
    this.parentData3=this.EnterStatus;
    this.parentData4=this.Enterdob;

  
  }

  value="";

  sendData(value:string)
  {
    this.value=value;
  }
}
