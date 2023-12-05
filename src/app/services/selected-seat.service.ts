import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectedSeatService {

  constructor() { }

  private selectedSeat: string = '';
  private totalfare:any

  setSelectedSeat(seatNumber: string) {
    this.selectedSeat = seatNumber;
   
  }

  getSelectedSeat(): string {
    return this.selectedSeat ;
  }


  setTotalFare(fare:any){
    console.log(fare)
    this.totalfare=fare

  }

  getTotalFare():string{
    return this.totalfare;
  }
}
