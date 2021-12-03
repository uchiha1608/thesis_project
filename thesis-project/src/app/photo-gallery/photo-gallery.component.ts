import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent implements OnInit {
  constructor(private apiService: ApiService) { }
  rightEmail: boolean = false;
  ngOnInit(): void {
    
  }
  setIf(){
    this.rightEmail = true;
  }
}
