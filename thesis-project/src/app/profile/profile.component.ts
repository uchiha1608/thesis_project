import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  response="";
  constructor(private apiService: ApiService, private title: Title, private router: Router) { }
  curUser: string = sessionStorage.getItem('username');
  curName: string = sessionStorage.getItem('name');
  curFname: string = sessionStorage.getItem('fname');
  curLname: string = sessionStorage.getItem('lname');
  curEmail: string = sessionStorage.getItem('email');
  curPhone: string = sessionStorage.getItem('phone');
  curId: string = sessionStorage.getItem('id');
  curSex: string = sessionStorage.getItem('sex');
  curDOB: string = sessionStorage.getItem('dob');
  curProfess: string = sessionStorage.getItem('profession');
  ngOnInit(): void {
    this.title.setTitle("profile - " + sessionStorage.getItem("username"));
    
  }
  getItemm(item){
    return sessionStorage.getItem(item) || '';
  }
  edit(fname: string,lname: string, email: string, phone: string, dob: string, profess: string){
    const formData: FormData = new FormData();
    formData.append('username', this.curUser);
    formData.append('fname', fname);
    formData.append('lname', lname);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('dob', dob);
    formData.append('profession', profess);
    formData.append('action', 'edit');
    formData.append('type', '3');
    this.apiService.loginService(formData).subscribe(
      res=>{
        console.log(res);
        this.response = res;
        if(this.response["statusCode"] == 200){
          sessionStorage.setItem('name', lname +' '+ fname);
          sessionStorage.setItem('fname', fname);
          sessionStorage.setItem('lname', lname);
          sessionStorage.setItem('email', email);
          sessionStorage.setItem('phone', phone);
          sessionStorage.setItem('dob', dob);
          sessionStorage.setItem('profession', profess);
          window.alert("Edit success!");
          window.location.href="profile";
          // this.router.navigate(['/profile']);
          // this.ngOnInit();
        } else{
          window.alert("Something is wrong");
        }
      }
    )

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
            window.location.href = "profile";
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
