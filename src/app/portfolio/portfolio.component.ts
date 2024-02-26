import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatProgressSpinnerModule, ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ThemePalette } from '@angular/material/core';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  Projects: any;
  selectedId: number = 1;
  InformationAboutProject: string = "Analyzing positive and negative interactions, comparing two group chats, involves examining peak chat times and patterns, assessing tone, language use, and dynamics for insightful conclusions."
  readonly APIUrl = "https://localhost:44368";
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;
  ngOnInit() {
    this.getInformationAboutProject(1);
    this.GetAllProjects();
  }
  constructor(private http:HttpClient) {
  }
  

  GetAllProjects() {
    debugger
    this.http.get(this.APIUrl + '/Profile/GetAllProjects').subscribe({
      next: (data: any) => {
        debugger
        this.Projects = data.value;
      },
      error: (error: any) => {
        console.error('Error fetching data:', error);
        debugger
      }
    });
  }


  getInformationAboutProject(id: number) {
    this.selectedId = id;
    debugger;
    this.http.get(`${this.APIUrl}/Profile/GetInformationAboutProject/${id}`).subscribe({
      next: (data: any) => {
        debugger
        this.InformationAboutProject = data.information;
      },
      error: (error: any) => {
        console.error('Error fetching data:', error);
        debugger;
      }
    });
  }

}
