import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Observable} from "rxjs";
import {Icountry} from "../../icountry";

@Injectable({
  providedIn: 'root'
})
export class CountrysvService {
  url = 'http://localhost:8080/country';
  country:Array<Icountry>[] = [];

  constructor(private httpclient:HttpClient) { }

  getAllCountry():Observable<Icountry[]>{
    return this.httpclient.get<Icountry[]>(this.url)
  }
}
