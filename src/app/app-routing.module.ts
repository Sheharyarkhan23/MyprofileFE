import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { StartingScreenComponent } from './starting-screen/starting-screen.component';

const routes: Routes = [
  { path: 'app-starting-screen', component: StartingScreenComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', redirectTo:'/app-starting-screen' ,pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'not-Found', loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule) },  { path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'contactme', loadChildren: () => import('./contactme/contactme.module').then(m => m.ContactmeModule) },
  { path: 'portfolio', loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule) },
  { path: 'experience', loadChildren: () => import('./experiene/experiene.module').then(m => m.ExperieneModule) },
  { path: 'blogs', loadChildren: () => import('./blogs/blogs.module').then(m => m.BlogsModule) },
  { path: 'services', loadChildren: () => import('./services/services.module').then(m => m.ServicesModule) },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
