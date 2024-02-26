import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule,FormGroup } from '@angular/forms';
import { ContactmeRoutingModule } from './contactme-routing.module';
import { ContactmeComponent } from './contactme.component';


@NgModule({
  declarations: [
    ContactmeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ContactmeRoutingModule
  ]
})
export class ContactmeModule { }
