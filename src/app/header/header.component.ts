import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd } from '@angular/router';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { InformationComponent } from './information.component';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  matDialogRef: MatDialogRef<InformationComponent> | undefined;
  constructor(private router: Router, private matDialog: MatDialog, private http: HttpClient) {

  }
  name :string= 'Sheharyar Khan';
  informationAboutScreen :string= 'Khan';
  headingOfInformation :string= 'Khan';
  ActiveTag = '/dashboard';
  readonly APIUrl = "https://localhost:44368";
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        debugger
        this.ActiveTag = this.router.url;
      }
    });
  }
  ShowPopUp = false;
  onMenuclick(e:string) {
    debugger
    if (e == 'Experience')
      this.router.navigate(['/experience']);
    else if (e =='Home')
      this.router.navigate(['/dashboard']);
    else if (e == 'Services')
      this.router.navigate(['/services']);
    else if (e == 'Contact')
      this.router.navigate(['/contactme']);
    else if (e == 'Portfolio')
      this.router.navigate(['/portfolio']);
    else if (e == 'My Thoughts')
      this.router.navigate(['/blogs']);
  }
  OpenModal() {
    var id = 0;
    if (this.ActiveTag == '/experience')
      id = 2;
    else if (this.ActiveTag == '/dashboard')
      id = 1;
    else if (this.ActiveTag == '/services')
      this.router.navigate(['/services']);
    else if (this.ActiveTag == '/contactme')
      this.router.navigate(['/contactme']);
    else if (this.ActiveTag == '/portfolio')
      id = 3;
    else if (this.ActiveTag == '/blogs')
      this.router.navigate(['/blogs']);
    this.http.get(`${this.APIUrl}/Header/GetInformationAboutScreen/${id}`).subscribe({
      next: (data: any) => {
        console.log('API Response:', data);
        this.informationAboutScreen = data.information;
        this.headingOfInformation = data.heading;
        this.ShowPopUp = true;
      },
      error: (error: any) => {
        console.error('Error fetching data:', error);
        debugger;
      }
    });
  }
  CloseModal() {
    this.ShowPopUp = false;
  }

}
