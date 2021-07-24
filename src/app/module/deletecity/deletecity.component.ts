import { Component, OnInit } from '@angular/core';
import {CitysvService} from "../../service/citysv/citysv.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-deletecity',
  templateUrl: './deletecity.component.html',
  styleUrls: ['./deletecity.component.scss']
})
export class DeletecityComponent implements OnInit {
  id:any;
  constructor(private citySv:CitysvService,private router:Router,private activerouter:ActivatedRoute) {

    this.activerouter.paramMap.subscribe((paraMap)=>{
      this.id = paraMap.get('id');
    })
  }

  ngOnInit(): void {
    this.deleteCity()
  }

  deleteCity(){
    this.citySv.deleteCityById(this.id).subscribe(()=>{
      this.router.navigate(['/city']);

    });
  }

}
