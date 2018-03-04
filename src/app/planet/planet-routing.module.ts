import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './list/list.component'

const PLANET_ROUTES: Routes = [
  { path: 'list', component: ListComponent },
];
 
export const PlanetRouting = RouterModule.forChild(PLANET_ROUTES)
