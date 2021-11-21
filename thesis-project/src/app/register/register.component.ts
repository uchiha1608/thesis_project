import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import Swal from 'sweetalert2';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  response = ""
  constructor(private http: HttpClient, private apiService: ApiService, private title: Title) {}
  
  ngOnInit() {
    this.title.setTitle("Register - Family tree");
  }
  register(username: string, fname: string, lname: string, email: string, password: string, phone: string, sex:string, dob: string){
    const formData: FormData = new FormData();
    
    formData.append('type', '2');
    formData.append('username',username);
    formData.append('lname', lname);
    formData.append('fname', fname);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('phone', phone);
    formData.append('sex', sex);
    formData.append('dob', dob);
    this.apiService.loginService(formData).subscribe(
      res=>{
        console.log(res);
        this.response = res;
        if(this.response["statusCode"] == "200"){         
          sessionStorage.setItem('username',this.response["username"]);
          sessionStorage.setItem('name',this.response["name"]);
          sessionStorage.setItem('phone',this.response["phone"]);
          sessionStorage.setItem('email',this.response["email"]);
          sessionStorage.setItem('sex',this.response["sex"]);
          sessionStorage.setItem('id',this.response["id"]);
          sessionStorage.setItem('dob',this.response["dob"]);
          sessionStorage.setItem('lname',this.response["lname"]);
          sessionStorage.setItem('fname',this.response["fname"]);
          
          window.alert("Create Account successfully!");
          window.location.href = "/profile";
        } else {
          window.alert("Username Already exist!");
        }
      },
      err=>{
        console.log(err);
      }
    )
  }
}