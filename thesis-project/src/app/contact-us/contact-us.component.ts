import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private apiService: ApiService) { }
  isSended = false;
  
  ngOnInit(): void {  
  }
  reset(){
    this.isSended = false;
  }
  send(name: string, email: string, message: string){
    const messageForm: FormData = new FormData();
    messageForm.append('name', name);
    messageForm.append('email', email);
    messageForm.append('message', message);
    this.apiService.message(messageForm).subscribe(
      res=>{
        if(res["statusCode"] == 200){
          this.isSended = true;
          setTimeout(() =>{
            this.isSended = false;  
          },5000);
        } else{
          alert("Something is wrong");
        }
      }
    )
  }
}
