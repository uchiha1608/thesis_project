import { formatCurrency } from '@angular/common';
import { expressionType } from '@angular/compiler/src/output/output_ast';
import { Component, HostListener, OnInit, setTestabilityGetter } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../api.service';

export enum KEY_CODE{
  ENTER_KEY = 13
}
@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  
  response = "";
  error: string;
  username = "";
  constructor(private apiService: ApiService, private title: Title) { }
  temp  = "<h1>Ehe</h1>";
  ngOnInit(): void {
    this.title.setTitle("Admin - Family tree");
  }
  @HostListener('window:keyup', ['$event'])
  keyEvent(event:KeyboardEvent){
    if(event.key === 'Enter'){
      document.getElementById("login").click();
    }
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
        sessionStorage.setItem('username',res["username"])
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
