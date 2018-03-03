import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListPlanetComponent } from './list-planet/list-planet.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [

  {path: 'auth', loadChildren: 'app/auth/auth.module#AuthModule'},
  {path: 'planet', loadChildren: 'app/planet/planet.module#PlanetModule', canActivate: [AuthGuard]},
  { path: '**', redirectTo: 'planet/list' }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);



