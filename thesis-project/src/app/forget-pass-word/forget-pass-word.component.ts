import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-forget-pass-word',
  templateUrl: './forget-pass-word.component.html',
  styleUrls: ['./forget-pass-word.component.css']
})
export class ForgetPassWordComponent implements OnInit {

  constructor(private apiService: ApiService, private title: Title, private router: Router) { }
  isCorrected = false;
  isMismatch = false;
  ngOnInit(): void {
  }
  resetPass_1(username: string, email: string){
    const formData: FormData = new FormData();
    formData.append('request', 'forget_pass');
    formData.append('username', username);
    formData.append('email', email);
    var response;
    this.apiService.loginService(formData).subscribe(
      res=>{
        response = res;
        localStorage.setItem('username', response['username']);
        if(response["statusCode"] == 200){
        this.isCorrected = true;
        } else {
          window.alert('Mismatch Username and Email, please enter again!');
        }
      }, err =>{

      }
    )
  }
  resetPass_2(newpass: string, repass: string){
    const formData: FormData = new FormData();
    formData.append('request', 'setpassword');
    formData.append('username', localStorage.getItem('username'));
    formData.append('newpass', newpass);
    var res_set;
    if(newpass == repass){
      this.apiService.loginService(formData).subscribe(
        res=>{   
          res_set = res;
          if(res_set["statusCode"] == 200) {            
            window.alert('Reset complete');
            window.location.href='/login';
          }   
        }, err =>{

        }
      )
    } else{
      this.isMismatch = true;
    }
  }
  

}
