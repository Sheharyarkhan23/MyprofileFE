import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CheckPermissionToWriteBlogComponent } from '../check-permission-to-write-blog/check-permission-to-write-blog.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  Data: any = null;
  readonly APIUrl = "https://localhost:44368";

  constructor(private dialogueRef: MatDialog, private http: HttpClient) {
    
    
  }
  ngOnInit() {
    debugger
    this.getAllBlogs();
  }
  getAllBlogs()
  {
    this.http.get(`${this.APIUrl}/Blog/GetAllBlogs/`).subscribe({
      next: (data: any) => {
        console.log('API Response:', data);
        debugger
        this.Data = data.value;
      },
      error: (error: any) => {
        console.error('Error fetching data:', error);
        debugger;
      }
    });
  }
  writeBlog(): void {
    const dialogRef = this.dialogueRef.open(CheckPermissionToWriteBlogComponent, {
      position: {
        top: '5%',
        left: '5%',
      },
    });
  }

}
