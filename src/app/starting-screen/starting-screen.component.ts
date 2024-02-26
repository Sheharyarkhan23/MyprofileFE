import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-starting-screen',
  templateUrl: './starting-screen.component.html',
  styleUrls: ['./starting-screen.component.scss'],
})
export class StartingScreenComponent {
  constructor(private router: Router) {

  }

  goToLogin() {
    debugger
    this.router.navigate(['/login']);
  }
  goToDashboard() {
    debugger
    this.router.navigate(['/dashboard']);
  }

}
