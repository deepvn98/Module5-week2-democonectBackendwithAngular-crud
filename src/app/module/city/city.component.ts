import { Component, OnInit } from '@angular/core';
import {Icity} from "../../icity";
import {CitysvService} from "../../service/citysv/citysv.service";
import {Icountry} from "../../icountry";
import {CountrysvService} from "../../service/countrysv/countrysv.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {
  cities:Icity[]=[];
  Coutries:Icountry[]=[];
  country:Icountry={
    id:0,
    name:''
  };
  constructor(private cityserve:CitysvService,private countrysv:CountrysvService) {
    this.cityserve.getListCity().subscribe((citiessv)=>{
      this.cities = citiessv
    });
    this.countrysv.getAllCountry().subscribe((item)=>{
      this.Coutries=item;
    })

  }

  ngOnInit(): void {

  }



}
