import { Component,HostListener, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { data } from 'jquery';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AuthService } from '../auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'; 
import { Router, RoutesRecognized } from '@angular/router';
import { Routes } from '@angular/router';
import { ApiService } from '../api.service';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import { ErrorMessage } from 'ng-bootstrap-form-validation';
export enum KEY_CODE{
  ENTER_KEY = 13
}
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})

export class LogInComponent implements OnInit {
  response = "";
  formGroup: FormGroup;
  customErrorMessages: ErrorMessage[] = [
    {
      error:'required',
      format: (label, error) => `${label.toUpperCase()} IS DEFINITELY REQUIRED!`
    },
    {
      error: 'pattern',
      format: (label, error) => `${label.toUpperCase()} DOESN'T LOOK RIGHT...`
    }
  ];
  constructor(private apiService: ApiService, private title: Title, private router: Router) {}
  
  ngOnInit(): void {
    this.formGroup = new FormGroup({
      Username: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20)
        //Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ]),
      Password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20)
      ])
    });
    this.title.setTitle("Login - Family tree");
  }
  @HostListener('window:keyup', ['$event'])
  keyEvent(event:KeyboardEvent){
    if(event.key === 'Enter'){
      document.getElementById("login").click();
    }
  }
  login(username: string, password: string) {
    
    const formData: FormData = new FormData();
    formData.append('username',username);
    formData.append('password',password);
    formData.append('type','1')
    this.apiService.loginService(formData).subscribe(
      res=>{
        console.log(res);
        this.response = res;
        
        if(this.response["statusCode"] == "200"){
          if(this.response["role"] == "1"){
            sessionStorage.setItem('username',this.response["username"]);
            sessionStorage.setItem('name',this.response["name"]);
            sessionStorage.setItem('phone',this.response["phone"]);
            sessionStorage.setItem('email',this.response["email"]);
            sessionStorage.setItem('sex',this.response["sex"]);
            sessionStorage.setItem('id',this.response["id"]);
            sessionStorage.setItem('dob',this.response["dob"]);
            sessionStorage.setItem('lname',this.response["lname"]);
            sessionStorage.setItem('fname',this.response["fname"]);
            let dialog:any = <any>document.getElementById("loginDialog");
            dialog.showModal();
            window.location.href = "profile";
            // this.router.navigate(['/profile']);
          }
          if(this.response["role"] == "2"){
            sessionStorage.setItem('username',this.response["username"]);
            window.location.href = 'staff-home';
          }
          if(this.response["role"] == "0"){
            sessionStorage.setItem('admin-name', this.response["username"]);
            window.location.href = "admin-home";
          }
        } else{         
          window.alert("Wrong username or password");
        }
      },
      err=>{
        console.log(err);
      }
    )
  }
}
