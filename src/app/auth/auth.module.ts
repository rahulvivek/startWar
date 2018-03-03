import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

import { authRouting } from './auth.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    authRouting,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [LoginComponent, LogoutComponent]
})
export class AuthModule { }
