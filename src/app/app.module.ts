import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBusesComponent } from './components/search-buses/search-buses.component';
import { BusListViewComponent } from './components/bus-list-view/bus-list-view.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SubmitFormComponent } from './components/submit-form/submit-form.component';
import { ReviewTicketComponent } from './components/review-ticket/review-ticket.component';
import { HomePageComponent } from './components/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBusesComponent,
    BusListViewComponent,
    SubmitFormComponent,
    ReviewTicketComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
