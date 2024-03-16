import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule,FormGroup } from '@angular/forms';
import { ContactmeRoutingModule } from './contactme-routing.module';
import { ContactmeComponent } from './contactme.component';
import { GoogleMapsModule } from '@angular/google-maps'

@NgModule({
  declarations: [
    ContactmeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ContactmeRoutingModule,
    GoogleMapsModule
  ]
})
export class ContactmeModule { }
