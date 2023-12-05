import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusListViewComponent } from './components/bus-list-view/bus-list-view.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ReviewTicketComponent } from './components/review-ticket/review-ticket.component';
import { SearchBusesComponent } from './components/search-buses/search-buses.component';
import { SubmitFormComponent } from './components/submit-form/submit-form.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'search',component:SearchBusesComponent},
  {path:'bus/list/:id',component:BusListViewComponent},
  {path:'submitForm/:id',component:SubmitFormComponent},
  {path:'review/:id/:fullname/:email/:number',component:ReviewTicketComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
