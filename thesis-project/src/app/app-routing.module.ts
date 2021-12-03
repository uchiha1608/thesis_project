import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TreeComponent } from './tree/tree.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ProfileComponent } from './profile/profile.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { ForgetPassWordComponent } from './forget-pass-word/forget-pass-word.component';
import { WavesModule, ButtonsModule, IconsModule } from 'angular-bootstrap-md';
const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full"},
  { path: "*", component: HomeComponent},
  {path: "landing-page", component: LandingPageComponent},
  { path: "home", component: HomeComponent},
  { path: "tree", component: TreeComponent},
  { path: "login", component: LogInComponent},
  { path: "register", component: RegisterComponent},
  { path: "contact-us", component: ContactUsComponent},
  { path: "admin-home", component:AdminHomeComponent},
  { path: "profile", component:ProfileComponent},
  { path: "photo-gallery", component: PhotoGalleryComponent},
  { path: "forget-pass", component: ForgetPassWordComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
