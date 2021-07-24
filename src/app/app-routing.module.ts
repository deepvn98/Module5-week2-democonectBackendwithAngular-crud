import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CityComponent} from "./module/city/city.component";
import {CountryComponent} from "./module/country/country.component";
import {CreateCityComponent} from "./module/create-city/create-city.component";

const routes: Routes = [
  {path:'',component:CityComponent},
  {path:'city',component:CityComponent},
  {path:'country',component:CountryComponent},
  {path:'create',component:CreateCityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
