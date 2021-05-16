import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  logOut(): void{
    localStorage.setItem('isLoggedIn','false');
    localStorage.removeItem('token');
  }
}

