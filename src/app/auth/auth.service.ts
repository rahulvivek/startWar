import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'
import { Router } from '@angular/router';
import { StarwarApiService } from '../services/startwar-api.service';
import { reject } from 'q';




@Injectable()
export class AuthService {

  constructor(private http: Http,
              private starwarApiService: StarwarApiService,
              private router: Router) { }

  signIn(params) {
    console.log(params["userName"])
    let promise = new Promise((resolve, reject) => {
      this.starwarApiService.getPeople(params["userName"])
        .subscribe((response) => {
          console.log(response)
          
            if(response.count > 0) {
              let user = response.results[0]
              if (user.birth_year == params["password"]) {
                console.log("Yes, user can login")
                localStorage.setItem('user', user)
                resolve()
              } else {
                reject()
              }
            } else {
              reject()
            }
          
          
        })
    })

    return promise
  }

  signOut() {
    localStorage.removeItem('user');
    this.router.navigate(['/auth/login']);
  }

  isAuthenticated() {
    let user = localStorage.getItem('user')
    console.log(user)
    if(user != null) {
      return true
    } 
    return false
  }

}
