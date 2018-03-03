import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

const AUTH_ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },
  ];


export const authRouting = RouterModule.forChild(AUTH_ROUTES);