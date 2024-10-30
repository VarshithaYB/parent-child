import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { map, Observable, tap } from 'rxjs'; 
@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8090/api1';

  sendTokenRequest(userName:string,password:string,roles:string):Observable<any>
  {
    let jsonRequestBody:any={username:userName,password:password,roles:roles};
    let url='http://localhost:8090/authenticate';
    return this.http.post(url,jsonRequestBody,{responseType:'text' as 'json'})

  }


  sendAuthRequest(token: string): Observable<any>
  {
    const headers=new HttpHeaders().set('Authorization',"Bearer"+token);
    let url='http://localhost:8090/api1';
    return this.http.get(url,{headers,responseType:'text' as 'json'});
  }

  callService(userName:string,password:string,role:string)
  {
    this.sendTokenRequest(userName,password,role).pipe(
      tap((response:any)=>{
        console.log('')
        console.log("Authentication Response",response);
        const token=response;
        localStorage.setItem('token',response);
        return this.sendAuthRequest(token);
      })
    ).subscribe({
      next:(response: any)=>{
        console.log("Login Success",response);
      },
      error:(error)=>
      {
        console.log("Error: ",error);
      }

    });
  }
}