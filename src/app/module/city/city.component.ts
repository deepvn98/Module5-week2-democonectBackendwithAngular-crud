import {Component, OnInit} from '@angular/core';
import {Icity} from "../../icity";
import {CitysvService} from "../../service/citysv/citysv.service";
import {Icountry} from "../../icountry";
import {CountrysvService} from "../../service/countrysv/countrysv.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {
  cities: Icity[] = [];
  country: Icountry = {
    id: 0,
    name: ''
  };

  constructor(private cityserve: CitysvService) {
    this.cityserve.getListCity().subscribe((citiessv) => {
      this.cities = citiessv
    });
  }

  ngOnInit(): void {

  }

  deleteCity(id:number) {
    this.cityserve.deleteCityById(id).subscribe(()=>{
      this.cityserve.getListCity().subscribe((citiessv) => {
        this.cities = citiessv
      });
    });
  }
}
