import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'
import { Router } from '@angular/router';
import { StarwarApiService } from '../services/startwar-api.service';
import { reject } from 'q';




@Injectable()
export class AuthService {
  /*
    Service to manage all Auth related methods.
  */

  constructor(private http: Http,
              private starwarApiService: StarwarApiService,
              private router: Router) { }

  signIn(params) {
    /*
      Search the people with username as name and if people
      exist check date of birth and if correct set the user object 
      in local storage.
     */
    let promise = new Promise((resolve, reject) => {
      this.starwarApiService.getPeople(params["userName"])
        .subscribe((response) => {
            if(response.count > 0) {
              let user = response.results[0]
              if (user.birth_year == params["password"]) {
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
    /*
      Remove the user object from local storage
     */
    localStorage.removeItem('user');
    this.router.navigate(['/auth/login']);
  }

  isAuthenticated() {
    /*
      Check user object is present in the local storage.
     */
    let user = localStorage.getItem('user')
    if(user != null) {
      return true
    } 
    return false
  }

}
