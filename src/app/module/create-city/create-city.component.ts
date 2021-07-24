import { Component, OnInit } from '@angular/core';
import {CitysvService} from "../../service/citysv/citysv.service";
import {CityComponent} from "../city/city.component";
import {Icity} from "../../icity";
import {Router} from "@angular/router";
import {CountrysvService} from "../../service/countrysv/countrysv.service";
import {Icountry} from "../../icountry";

@Component({
  selector: 'app-create-city',
  templateUrl: './create-city.component.html',
  styleUrls: ['./create-city.component.scss']
})
export class CreateCityComponent implements OnInit {
  city:Icity={
    id:0,
    name:'',
    country1:{
      id:1
    },
    area:0,
    population:0,
    gdp:0,
    description:''
  };
  cities:Icity[]=[];
  countries:Icountry[]=[];

  constructor(private citySv:CitysvService, private router:Router,private country1:CountrysvService ) {

  }

  ngOnInit(): void {
    this.createCity();
    this.getAllCountry();
  }

  createCity(){
    this.citySv.createCity(this.city).subscribe(()=>
    {this.router.navigate(['/city'])
    })
    console.log(this.city)
  }
  getAllCountry(){
    this.country1.getAllCountry().subscribe((list)=>{
      this.countries = list;
    })
  }

}
