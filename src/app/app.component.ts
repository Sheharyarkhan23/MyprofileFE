import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-tour-of-heroes';
  show = true;
  constructor(private router: Router) { }
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        debugger
        this.show = true;
        if (this.router.url === '/app-starting-screen' || this.router.url === '/login' ) {
           this.show = false;
        }
      }
    });
  }



}
