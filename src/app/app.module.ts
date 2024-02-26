import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StartingScreenComponent } from './starting-screen/starting-screen.component';
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { InformationComponent } from './header/information.component';
import { HttpClientModule } from '@angular/common/http';
import { CheckPermissionToWriteBlogComponent } from './check-permission-to-write-blog/check-permission-to-write-blog.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    StartingScreenComponent,
    FooterComponent,
    HeaderComponent, InformationComponent, CheckPermissionToWriteBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatButtonModule,
    HttpClientModule,
    MatInputModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
