import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';
import { bus } from 'src/app/interface/bus';
import { User } from 'src/app/interface/user';
import { BusListService } from 'src/app/services/bus-list.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.scss']
})
export class SubmitFormComponent implements OnInit{

  reactiveForm!:FormGroup

  busList:bus=new bus();

  userDetails:User=new User()

  constructor(private formBuilder: FormBuilder,private _route:ActivatedRoute,private _busList : BusListService, private _user:UserService, private _router : Router){}


  ngOnInit(){
    this.reactiveForm = this.formBuilder.group({
      fullname :new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required,Validators.email]),
      number:new FormControl('',[Validators.required,Validators.maxLength(10),Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    })

    this._route.params.pipe(tap((params:any)=>{

      console.log(params)
      const id = params['id']
     
     

      if(id){
        this._busList.getSingleBus(id).subscribe((response)=>{
          console.log(response);
          this.busList=response;
        })

      }
    }
    )).subscribe();
         

}

submit(){
 

  console.log(this.reactiveForm.value)
  this._user.subUser(this.reactiveForm.value).subscribe((response)=>{

    console.log(response)
    this.userDetails=response
    this._router.navigate(['/review', this.busList.id,this.userDetails.fullname,this.userDetails.email,this.userDetails.number])

  })
  // this._router.navigate(['/review', this.busList.id,this.userDetails.id])
  // this._router.navigate(['/review', this.busList.id,this.userDetails.fullname,this.userDetails.email,this.userDetails.number])
}
}
