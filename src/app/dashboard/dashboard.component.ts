import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(private router: Router) {

  }
  education = false;
  profile = true;
  certifications = false;
  GetProfile() {
    this.profile = true;
    this.education = false;
    this.certifications = false;
  }
  GetEducation() {
    this.profile = false;
    this.education = true;
    this.certifications = false;
  }
  GetCertification() {
    this.profile = false;
    this.education = false;
    this.certifications = true;
  }
  ContactMe() {
    this.router.navigate(['/contactme']);
  }
}
