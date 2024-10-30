import { Component } from '@angular/core';
import { JwtService } from '../jwt.service';
import { HttpErrorResponse } from '@angular/common/http';
// import { FormBuilder, FormGroup } from '@angular/forms';

   

@Component({
  selector: 'app-jwt',
  templateUrl: './jwt.component.html',
  styleUrls: ['./jwt.component.css']
})
export class JwtComponent {

   userName:string='';
   password: string ='';
   roles: string ='';

   constructor(private JwtService: JwtService) {}
  onSubmit()
  {
    this.JwtService.callService(this.userName,this.password,this.roles);
    
  }
  
}
  


