import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  //GET PAGES

  getPages(){
    //return this.http.get(`https://wpnspodcast.techandmore7.com//wp-json/wp/v2/pages`);
    return this.http.get(`${environment.urlAPIwp}pages`);
  }
}
