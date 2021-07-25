import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Observable} from "rxjs";
import {Icity} from "../../icity";

@Injectable({
  providedIn: 'root'
})
export class CitysvService {
  url_Api = 'http://localhost:8080/city';
  cities:Array<Icity>[]=[];

  constructor( private httpclient:HttpClient) { }

//  lay ra danh sach thanh pho
  getListCity():Observable<Icity[]>{
    return this.httpclient.get<Icity[]>(this.url_Api);
  }

//  them thanh pho
  createCity(city:Icity):Observable<Icity>{
    return this.httpclient.post<Icity>(this.url_Api+'/create',city);

  }

//lay ra mot thanh pho
  deleteCityById(id: number):Observable<Icity>{
    return this.httpclient.delete<Icity>(this.url_Api+'/'+ id);

}

//sua mot thanh pho
  updateCity(id : number, city:Icity):Observable<Icity>{
    return this.httpclient.put<Icity>(this.url_Api+'/'+id+'/edit',city);
  }

//  detail acity
  getCityById(id:number):Observable<any>{
    return this.httpclient.get<any>(this.url_Api+'/with/'+id);
  }

}
