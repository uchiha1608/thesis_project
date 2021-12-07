import { BrowserModule,Title } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TreeComponent } from './tree/tree.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ThesisProjectModule } from './thesis-project.module';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WavesModule, ButtonsModule, IconsModule } from 'angular-bootstrap-md';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { IntroComponent } from './intro/intro.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './guards/auth.guard'; 
import { ApiService } from './api.service';
import { ProfileComponent } from './profile/profile.component';
import { ForgetPassWordComponent } from './forget-pass-word/forget-pass-word.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { NgBootstrapFormValidationModule, CUSTOM_ERROR_MESSAGES } from 'ng-bootstrap-form-validation';
import { SampleTreeComponent } from './sample-tree/sample-tree.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TreeComponent,
    AboutusComponent,
    LogInComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    ContactUsComponent,
    OurServicesComponent,
    IntroComponent,
    AdminHomeComponent,
    ProfileComponent,
    ForgetPassWordComponent,
    PhotoGalleryComponent,
    SampleTreeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ThesisProjectModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    NgBootstrapFormValidationModule.forRoot(),
    NgBootstrapFormValidationModule,
    // AgmCoreModule.forRoot({
    //   apiKey: "xxx",
    //   libraries: ["places", "geometry"]
    // })
  ],
  providers: [ Title, AuthGuard, ApiService,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
