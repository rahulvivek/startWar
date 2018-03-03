import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './list/list.component'
import { DetailComponent } from './detail/detail.component'

const PLANET_ROUTES: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'detail', component: DetailComponent },
];
 
export const PlanetRouting = RouterModule.forChild(PLANET_ROUTES)
