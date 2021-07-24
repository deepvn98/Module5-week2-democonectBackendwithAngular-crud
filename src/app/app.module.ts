import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityComponent } from './module/city/city.component';
import { CountryComponent } from './module/country/country.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateCityComponent } from './module/create-city/create-city.component';

@NgModule({
  declarations: [
    AppComponent,
    CityComponent,
    CountryComponent,
    CreateCityComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
