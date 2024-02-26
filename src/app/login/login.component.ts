import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router: Router) {

  }

  showPassword = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  getEyeIcon() {
    return this.showPassword ? 'fas fa-eye-slash' : 'fas fa-eye';
  }
  submit() {
    debugger
    this.router.navigate(['/dashboard']);
  }
}
