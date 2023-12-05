import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { bus } from 'src/app/interface/bus';
import { Cities } from 'src/app/interface/cities';
import { User } from 'src/app/interface/user';
import { BusListService } from 'src/app/services/bus-list.service';
import { CitiesService } from 'src/app/services/cities.service';
import { SelectedSeatService } from 'src/app/services/selected-seat.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-review-ticket',
  templateUrl: './review-ticket.component.html',
  styleUrls: ['./review-ticket.component.scss']
})
export class ReviewTicketComponent implements OnInit {


busList:bus=new bus()
cityDetails:Cities[]=[]
selectedSeat: string = '';
totalFare:any

fullname=''
email=''
number=''

passengerDetails:User=new User()


  constructor(private _route:ActivatedRoute, private _busList:BusListService, private _cities: CitiesService,private selectedSeatService: SelectedSeatService,private _user:UserService){
  
    this.selectedSeat = this.selectedSeatService.getSelectedSeat();
    this.totalFare=this.selectedSeatService.getTotalFare();
  console.log(this.selectedSeat)
  console.log( this.totalFare)
  
  
  }

ngOnInit(){

  this._route.params.pipe(tap((params:any)=>{

    console.log(params)
    const id = params['id']
    this.fullname = params['fullname']
    this.email = params['email']
    this.number = params['number']



    if(id){
      this._busList.getSingleBus(id).subscribe((response)=>{
        console.log(response);
        this.busList=response;
      })

    }

    // if(fullname){
    //   this._user.getUser(fullname).subscribe((response)=>{
    //     console.log(response)
    //   })
    // }
  }
  )).subscribe();

 

  this._cities.getCities().subscribe((response) => {
    // console.log(response);
    this.cityDetails = response;
    // this.cities=response
    // console.log(this.cityDetails);
  });


 
       
  
}
}
