import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.scss']
})
export class ContactmeComponent implements OnInit {
  readonly APIUrl = "https://localhost:44368";
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phoneNo: new FormControl(''),
    note: new FormControl(''),
  });
  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
  }
  center: google.maps.LatLngLiteral = {
    lat: 31.4659, 
    lng: 74.2232 
  };
  zoom = 12; 
  markerOptions: google.maps.MarkerOptions = {
    draggable: true
  };
  markerPositions: google.maps.LatLngLiteral[] = [];
  addMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.markerPositions.push(event.latLng.toJSON());
  }

  onSubmit() {
   
  }
  submitContactFormData() {
    console.warn(this.profileForm.value);
    debugger
    this.http.get(`${this.APIUrl}/ContactUs/SaveContactFromInformation/${this.profileForm.value}`).subscribe({
      next: (data: any) => {
        debugger
      },
      error: (error: any) => {
        console.error('Error fetching data:', error);
        debugger;
      }
    });
  }
}
