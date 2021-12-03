import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  curName: string = sessionStorage.getItem('username');
  getItemm(item){
    return sessionStorage.getItem(item) || '';
  }
  logout(){
    sessionStorage.removeItem('username');
  }
  ngOnInit(): void {
    // $(document).on('scroll', function(){
    //   if($(window).scrollTop() > 30){
    //     $('#navbar').addClass('cyan');
    //   }
    //   else if($(window).length <1400){
    //     $('navbar').addClass('cyan');
    //   }
    //   else{
    //     $('#navbar').removeClass('cyan');
        
    //   }
    // });
  }
  
  


}
