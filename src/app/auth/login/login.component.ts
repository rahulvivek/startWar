import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormGroup, FormControl } from '@angular/forms'
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginError = false
  signUpForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl('')
  })
  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    document.getElementsByTagName('body')[0].removeAttribute('class');
  }

  SignIn() {
    this.loginError = false;
    this.authService.signIn(this.signUpForm.value)
      .then(() => {
        this.router.navigate(['./planet/list'])
      }).catch(()=> {
        this.loginError = true
        this.router.navigate(['/auth/login'])
      })
  }

}
