import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  curUser: string = sessionStorage.getItem('username');
  constructor(private apiService: ApiService, private title: Title) { }
  ngOnInit(): void {
    this.title.setTitle("profile - " + sessionStorage.getItem("username"));
  }
  
  


}
