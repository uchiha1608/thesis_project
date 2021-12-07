import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TreeComponent } from './tree/tree.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ProfileComponent } from './profile/profile.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { ForgetPassWordComponent } from './forget-pass-word/forget-pass-word.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { WavesModule, ButtonsModule, IconsModule } from 'angular-bootstrap-md';
import { SampleTreeComponent } from './sample-tree/sample-tree.component';
const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full"},
  { path: "*", component: HomeComponent},
  { path: "home", component: HomeComponent},
  { path: "tree", component: TreeComponent},
  { path: "about-us", component: AboutusComponent},
  { path: "login", component: LogInComponent},
  { path: "register", component: RegisterComponent},
  { path: "contact-us", component: ContactUsComponent},
  { path: "admin-home", component:AdminHomeComponent},
  { path: "profile", component:ProfileComponent},
  { path: "photo-gallery", component: PhotoGalleryComponent},
  { path: "forget-pass", component: ForgetPassWordComponent},
  { path: "sample-tree", component:SampleTreeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
