import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { bus } from 'src/app/interface/bus';
import { Cities } from 'src/app/interface/cities';
import { BusListService } from 'src/app/services/bus-list.service';
import { CitiesService } from 'src/app/services/cities.service';
import { SelectedSeatService } from 'src/app/services/selected-seat.service';

@Component({
  selector: 'app-bus-list-view',
  templateUrl: './bus-list-view.component.html',
  styleUrls: ['./bus-list-view.component.scss']
})
export class BusListViewComponent implements OnInit{

  show=false
  select!:boolean


  @Input() seatNumber!: string;
  // selected: boolean = false;

  seats:Array<any>=['A1','A2','A3','A4','B1','B2','B3','B4','C1','C2','C3','C4','E1','E2','E3','E4','F1','F2','F3','F4','G1','G2','G3','G4','H1','H2','H3','H4','I1','I2','I3','I4']
  
  selectedSeats: string[] = [];

  selectSeat:any


  busList:bus=new bus()
  busL:bus[]=[]
  totalSeats:number[]=[]

  cityDetails:Cities[] =[]

  class:any
  selected:any

  total!:number

  totalFare:any
seating: any;

  

constructor(private _route: ActivatedRoute,private _busList:BusListService,private _cities:CitiesService, private selectedSeatService : SelectedSeatService){}

  ngOnInit(){
    this.select=true
    this._route.params.pipe(tap((params:any)=>{

      console.log(params)
      const id = params['id']

      if(id){
        this._busList.getSingleBus(id).subscribe((response)=>{
          console.log(response);
          this.busList=response;
          for(let i=1;i<=this.busList.busTotalSeats;i++){
            this.totalSeats.push(i);
            // this.seats[i]=this.totalSeats[i]
            // console.log(this.seats[i])
          }

          for(let i=0;i<=this.busList.busTotalSeats;i++){
            this.seats[i]=this.busList.busTotalSeats[i]
           
            
            console.log(this.class[i])
      
          }

        
          


          // let objectURL = 'data:image/jpeg;base64,' + this.details.url.image;

          // this.thumbnail = this.sanitizer.bypassSecurityTrustUrl(objectURL);
        })
      }
    })).subscribe();


    //get cities
    this._cities.getCities().subscribe((response)=>{
      console.log(response)
      this.cityDetails=response

    })



    
  }


  // toggleSeatColor(seatNumber:any) {
  //   // Remove 'active' class from all seats
  //   this.selectedSeat = document.querySelector(`.seat:nth-child(${seatNumber})`);
  //   if (this.selectedSeat.classList.contains('active')) {
  //     this.selectedSeat.classList.remove('active');
  //   } else {
  //     this.selectedSeat.classList.add('active');
  //   }
  // }

 
  toggleSeat(seat:any) {
    this.select=false
    this.show=true

   
    this.selected = this.selectedSeats.indexOf(seat);

    // console.log(this.selected)


  if (this.selected > -1) {
    // Seat is already selected, remove it
    this.selectedSeats.splice(this.selected, 1);
  } else {
    // Seat is not selected, add it
    this.selectedSeats.push(seat);
  }

  console.log(this.selectedSeats.join(', '));
  
  // this.selectSeat =(this.selectedSeats.join(', '));
  this.selectSeat =this.selectedSeats;

  this.totalFare = this.selectedSeats.length * this.busList.busFare;
  this.serviceTotalFare(this.totalFare)

  this.selectSeatCall(this.selectSeat)

  

  

   }

   isSelected(seat: any): boolean {
    return this.selectedSeats.includes(seat);
  }

  serviceTotalFare(totalFare:any) {
    console.log(totalFare)
    this.selectedSeatService.setTotalFare(totalFare)
    
  }

  selectSeatCall(seatNumber: string) {
    console.log(seatNumber)
    
   
    this.selectedSeatService.setSelectedSeat(seatNumber);
  }

}
