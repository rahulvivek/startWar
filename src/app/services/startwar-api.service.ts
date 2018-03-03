import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';


import 'rxjs/add/operator/map';

export const STAR_WAR_API_URL = "https://swapi.co/api/"

@Injectable()
export class StarwarApiService {

  planets = []
  page = 0

  constructor(private http: Http) {
  }

  getPeople(name) {
    return this.http.get(STAR_WAR_API_URL + 'people/?search=' + name)
      .map((res) => {
        return res.json()
      }, err => {

      })
  }
  

  getPlanets(name?) {
    var url = STAR_WAR_API_URL + "planets/"
    if(name) {
      url += '?search=' + name
    }
    return this.http.get(url)
      .map((res) => {
        let response = res.json()
        this.planets = response.results
        return this.planets
        
      }, err => {
        return err
      })
  }

  getByUrl(url) {
    console.log(url)
    return this.http.get(url)
      .map((res) => {
        let response = res.json()
        console.log("posting")
        return response
      }, error => {
        return error
      })
  }

  getCachedPlanets() {
    return this.planets
  }

}
