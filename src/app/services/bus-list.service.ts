import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { bus } from '../interface/bus';

@Injectable({
  providedIn: 'root'
})
export class BusListService {

  constructor(private _http:HttpClient) { }

  getBusList(from:any,to:any,deDate:any):Observable<any>{

    // console.log(from,to)
    // const from=searchValues.get('leavingFrom').value
    // const to = searchValues.get('leavingTo').value
    
    console.log(from)
   
    // return this._http.get<bus>(`http://localhost:3000/bus-list?leavingFrom=${from}&leavingTo=${to}`)
    return this._http.get<bus>(`http://localhost:3000/bus-list?leavingFrom=${from}&leavingTo=${to}&departingOn=${deDate}`)
  }

  getSingleBus(id:any){
    console.log(id)
    return this._http.get<any>(`http://localhost:3000/bus-list/${id}`)
  
}
}
