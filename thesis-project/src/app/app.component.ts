import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationStart, Router } from '@angular/router';
import OrgChart from '@balkangraph/orgchart.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showHead: boolean = false;
  showFoot: boolean = false;
  public constructor(private titleService: Title, private router: Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'] == '/admin-home'){
          this.showHead = false;
        }else{
          this.showHead = true;
        }
        if (event['url'] == '/tree' || event['url'] == '/admin-home' || event['url'] == '/login' || event['url'] == '/register'){
          this.showFoot = false;
        }
        else {
          this.showFoot = true;
        }
      }
    }); 
   }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}