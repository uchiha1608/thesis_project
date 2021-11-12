import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { data } from 'jquery';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  response = "";

  constructor(private apiService: ApiService, private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle("Login - Family tree");
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
            window.location.href = "home";
          }
          if(this.response["role"] == "2"){
            sessionStorage.setItem('username',this.response["username"]);
            window.location.href = 'staff-home';
          }
          if(this.response["role"] == "0"){
            sessionStorage.setItem('admin-name', this.response["username"]);
            window.location.href = "admin-home";
          }
        }
      },
      err=>{
        console.log(err);
      }
    )
  }
}
