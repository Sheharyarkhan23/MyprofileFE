import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperieneRoutingModule } from './experiene-routing.module';
import { ExperieneComponent } from './experiene.component';


@NgModule({
  declarations: [
    ExperieneComponent
  ],
  imports: [
    CommonModule,
    ExperieneRoutingModule
  ]
})
export class ExperieneModule { }
