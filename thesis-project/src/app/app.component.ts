import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationStart, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showHead: boolean = false;
  public constructor(private titleService: Title, private router: Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'] == '/login'){
          this.showHead = false;
        }else{
          this.showHead = true;
        }
      }
    }); 
   }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}