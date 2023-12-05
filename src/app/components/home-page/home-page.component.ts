import { Component, OnInit } from '@angular/core';
import { Seat } from 'src/app/interface/seat';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{

  image:Seat=new Seat()

  constructor(private _service:UserService){
    // this._service.homePage().subscribe((response)=>{
    //   console.log(response)
    //   this.image=response
    // })
  }

  ngOnInit(){
    
   
  }

}
