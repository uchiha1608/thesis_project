import { formatCurrency } from '@angular/common';
import { expressionType } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, setTestabilityGetter } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  
  response = "";
  error: string;
  constructor(private apiService: ApiService, private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle("Admin - Family tree");
  }
  getItemm(item){
    return sessionStorage.getItem(item) || '';
  }
  login(username: string, password: string) {
    const formData: FormData = new FormData();
    formData.append('username',username);
    formData.append('password', password);
    this.apiService.loginService(formData).subscribe(
      res=>{
        console.log(res);
        this.response=res;
        sessionStorage.setItem('username',res)
        //localStorage.setItem('username',res);
      },
      err=>{
        console.log(err);
      }
    )
  }
  editPrivilege(username: string, role: string){
    const formData: FormData = new FormData();
    formData.append('username', username);
    formData.append('role', role);
  }
  deleteAccount(username: string){
    const formData: FormData = new FormData();
    formData.append('username', username);
    this.apiService.accountEditService(formData).subscribe(
      
    )
  }

}
