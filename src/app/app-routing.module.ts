import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CityComponent} from "./module/city/city.component";
import {CountryComponent} from "./module/country/country.component";
import {CreateCityComponent} from "./module/create-city/create-city.component";
import {DeletecityComponent} from "./module/deletecity/deletecity.component";
import {UpdatecityComponent} from "./module/updatecity/updatecity.component";

const routes: Routes = [
  {path:'',component:CityComponent},
  {path:'city',component:CityComponent},
  {path:'country',component:CountryComponent},
  {path:'create',component:CreateCityComponent},
  {path:'delete',component:DeletecityComponent},
  {path:'update/:id',component:UpdatecityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
