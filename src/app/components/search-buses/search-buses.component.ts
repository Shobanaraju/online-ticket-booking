import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';
import { bus } from 'src/app/interface/bus';
import { Cities } from 'src/app/interface/cities';
import { BusListService } from 'src/app/services/bus-list.service';
import { CitiesService } from 'src/app/services/cities.service';

@Component({
  selector: 'app-search-buses',
  templateUrl: './search-buses.component.html',
  styleUrls: ['./search-buses.component.scss'],
  providers: [DatePipe],
})
export class SearchBusesComponent implements OnInit {

  seatNumbers: string[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

  searchForm!: FormGroup;
  // bus:Bus=new Bus()
  busListDetails: bus[] = [];
  busList = false;
  busDetails: bus=new bus()

  cityDetails: Cities[] = [];
  cities:Cities=new Cities()

  dropdownOptions = [];

 totalSeats: number[]=[]

  

  dangerUrl:any
  trustedUrl:any

  dropDownValues: any;
  selectedFromCityId: any;
  selectedToCityId: any;

  // dropdownOptions = document.getElementById('dropdownSelect') as HTMLSelectElement;

  constructor(
    private sanitizer: DomSanitizer,
    private datePipe: DatePipe,
    private _fb: FormBuilder,
    private _router: Router,
    private _service: BusListService,
    private _cities: CitiesService,
    private _route: ActivatedRoute
  ) {
    
  }
  ngOnInit() {
    this.searchForm = this._fb.group({
      leavingFrom: new FormControl('',Validators.required),
      leavingTo: new FormControl('',Validators.required),
      departingOn: new FormControl('',Validators.required),
    });

    console.log('Form status:', this.searchForm.status);
    console.log('Form errors:', this.searchForm.errors);

    //fetching cities
    this._cities.getCities().subscribe((response) => {
      console.log(response);
      this.cityDetails = response;
      // this.cities=response
      console.log(this.cityDetails);
    });
  }

  // this.cityDetails.forEach(city=>{
  //   // console.log(city.city)
  //   this.dropdownOptions=city.city

  //   console.log( this.dropdownOptions)
  // })
  // console.log(this.dropdownOptions)
  // this.cityDetails.forEach(city => {
  //   document.addEventListener('DOMContentLoaded', () => {
  //     // Your code to manipulate the DOM here
  //     const dropdown = document.getElementById('dropdownSelect') as HTMLSelectElement;
  //     const option = document.createElement('option');
  //     option.value = city.id.toString(); // Set the value as the ID
  //     option.text = city.city; // Display the city name
  //     dropdown.appendChild(option);
  //     console.log(option)

  //     // ... rest of your code
  //   });

  // });

  // fromCitySelect(event:any){

  //   console.log(event)
  //   const selectedCityIndex = (event.target as HTMLSelectElement).selectedIndex-1;
  //   console.log((event.target as HTMLSelectElement).selectedIndex)

  //   const selectedCity = this.cityDetails[selectedCityIndex];
  //   // const selectedCity = this.cityDetails.find(city => city.city === selectedCityIndex);
  //   console.log(selectedCity)

  //   if (selectedCity) {
  //     this.selectedFromCityId = selectedCity.id;
  //     console.log('Selected From city ID:', this.selectedFromCityId);
  //   }

  // }

  // toCitySelect(event:any){
  //   console.log(event)
  //   const selectedCityIndex = (event.target as HTMLSelectElement).selectedIndex-1;
  //   console.log((event.target as HTMLSelectElement).selectedIndex)

  //   const selectedCity = this.cityDetails[selectedCityIndex];
  //   // const selectedCity = this.cityDetails.find(city => city.city === selectedCityIndex);
  //   console.log(selectedCity)

  //   if (selectedCity) {
  //     this.selectedToCityId = selectedCity.id;
  //     console.log('Selected To city ID:', this.selectedToCityId);
  //   }

  // }

  searchBus() {
    console.log('values are entered');

    // console.log(this.searchForm.value.departingOn)
    const from = this.searchForm.get('leavingFrom')?.value;
    const to = this.searchForm.get('leavingTo')?.value;
    const deDate = this.searchForm.get('departingOn')?.value;
    const formattedDate = this.datePipe.transform(deDate, 'dd-MM-yyyy');

    console.log(deDate);
    //
    this._service.getBusList(from, to, formattedDate).subscribe((response) => {
      console.log(response);

      this.busList = true;
      this.busListDetails = response;

      for(let i=1;i<=this.busDetails.busTotalSeats;i++){
        this.totalSeats.push(i);
      }
      
    });
  }

  // viewSeats(){
  //   this._router.navigate([''])
  // }
}

// this._router.navigate(['bus/list'])
// this._service.getBusList(this.selectedFromCityId,this.selectedToCityId).subscribe({
//   next:(response)=>{
//     this.busList=true
//     console.log(response)
//     this.busListDetails=response

//   },
//   error:(err)=>
//   console.log("error")
// })
