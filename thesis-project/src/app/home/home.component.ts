import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username: string;
  password: string;
  constructor() { }

            ngOnInit() {
            }
  isLoggedIn(): boolean {
    let status = false;
    if (localStorage.getItem('isLoggedIn') == "true"){
      status = true;
    }
    return status;
  }

}
