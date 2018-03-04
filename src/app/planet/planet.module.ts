import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TagCloudModule } from 'angular-tag-cloud-module';

import { PlanetRouting } from './planet-routing.module';
import { ListComponent } from './list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PlanetRouting,
    TagCloudModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [ListComponent]
})
export class PlanetModule { }
