import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactmeComponent } from './contactme.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: ContactmeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [RouterModule]
})
export class ContactmeRoutingModule { }
