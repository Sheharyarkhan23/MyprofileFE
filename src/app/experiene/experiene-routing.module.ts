import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperieneComponent } from './experiene.component';

const routes: Routes = [{ path: '', component: ExperieneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperieneRoutingModule { }
