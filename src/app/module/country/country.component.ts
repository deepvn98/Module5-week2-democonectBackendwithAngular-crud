import { Component, OnInit } from '@angular/core';
import {Icountry} from "../../icountry";
import {CountrysvService} from "../../service/countrysv/countrysv.service";

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  country:Icountry[] = [];

  constructor(private countrysv:CountrysvService) {
    this.countrysv.getAllCountry().subscribe((item)=>{
      this.country = item;
    })
  }

  ngOnInit(): void {
  }

}
