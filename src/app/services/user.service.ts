import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http :HttpClient) { }


  subUser(userValue : any){
    console.log(userValue)
    return this._http.post<any>('http://localhost:3000/user',userValue)
  }

  getUser(fullname : any){
    console.log(fullname)
    return this._http.get<any>(`http://localhost:3000/user/${fullname}`)
  }

 
}
