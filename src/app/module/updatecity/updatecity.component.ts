import { Component, OnInit } from '@angular/core';
import {CitysvService} from "../../service/citysv/citysv.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {CityComponent} from "../city/city.component";
import {Icity} from "../../icity";
import {CountrysvService} from "../../service/countrysv/countrysv.service";
import {Icountry} from "../../icountry";

@Component({
  selector: 'app-updatecity',
  templateUrl: './updatecity.component.html',
  styleUrls: ['./updatecity.component.scss']
})
export class UpdatecityComponent implements OnInit {
  id:any;

  city:Icity={
    id:0,
    name:'',
    country1:'',
    area:0,
    population:0,
    gdp:0,
    description:''
  };
  countries:Icountry[]=[];

  constructor(private citySv:CitysvService,
              private router:Router,
              private active:ActivatedRoute,
              private country:CountrysvService) {
    this.country.getAllCountry().subscribe((list)=>{
      this.countries=list;
    })

  }

  ngOnInit(): void {
    this.getThisId();
    this.getCityById(this.id);
  }

  getThisId(){
    this.active.paramMap.subscribe((parwMap:ParamMap)=>{
      this.id=parwMap.get('id');
    })
  }

  getCityById(id:number){
    this.citySv.getCityById(id).subscribe((citysv)=>{
      this.city = citysv;
      console.log(this.city);
    })

  }

  updateCity(){
    this.citySv.updateCity(this.id,this.city)
      .subscribe(()=>{
        this.router.navigate(['/city'])
      });
  }

}
