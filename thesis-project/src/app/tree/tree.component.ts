import { Component, OnInit } from '@angular/core';
import {Renderer2, Inject} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import OrgChart from "@balkangraph/orgchart.js";
import { ApiService } from '../api.service';
import { Title } from '@angular/platform-browser';
import { toArray } from 'rxjs/operators';
import { stringify } from 'querystring';
@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
  constructor(
    private renderer2: Renderer2,
    private apiService: ApiService,
    private title: Title,
    @Inject(DOCUMENT) private _document,
  ) {
  }
  dataSource = "";
  temp = "";
  temp2;
  fetchData(formData: FormData, username: string){
    formData.append("username", sessionStorage.getItem("username"));
    this.apiService.treeLoadingService(formData).subscribe(
      res=>{
        console.log(res);
        this.dataSource = res;
      },
      err=>{
        console.log(err);
      })
  }
  getItemm(item){
    return sessionStorage.getItem(item) || '';
  }
  // username = this.getItemm("username");
  username = "ehe";
  
  async ngOnInit(){
    
    const formData: FormData = new FormData();
    formData.append('username', this.username);
    this.apiService.treeLoadingService(formData).subscribe(
      res=>{
        this.dataSource = res;
        this.dataSource["tree"] = JSON.stringify(this.dataSource["tree"]);
          this.temp = this.dataSource["tree"];
          this.temp2 = this.temp;
          console.log(Array.isArray(JSON.parse("[" + this.temp2 + "]")));
          OrgChart.templates.diva.link = '<path stroke-linejoin="round" stroke="grey" stroke-width="2px" fill="none"d="{rounded}"/>';
              var chart = new OrgChart(document.getElementById("tree"), {
                  searchFields: ["name", "id"],
                  mouseScrool: OrgChart.action.scroll,
                  enableKeyNavigation: true,
                  layout: OrgChart.tree,
                  template:"diva",
                  align: OrgChart.ORIENTATION,
                  toolbar:{
                    zoom: true,
                    fit: true,
                    expandAll: true,
                    collapseAll: true
                  },
                  enableDragDrop: false,
                     nodeMenu:{
                           details: {text:"Details"},
                           edit: {text:"Edit"},
                           add: {text:"Add"},
                           remove: {text:"Remove"}
                           },
                           
                           collapse: {
                            level: 3
                          },
                           nodeBinding: {
                               field_0: "name",
                               field_1: "years",
                               img_0: "img"
                           },
                           
                           nodes: 
                           [JSON.parse("[" + this.temp2 + "]")]

                              

                           
                       });
                        chart.on('add', function(sender, nodeId){});
            
        // if(this.dataSource != null){
        //   // this.temp = JSON.stringify(this.dataSource["tree"]);

          
         
        //   // this.dataSource = JSON.parse(this.dataSource["tree"].toString());
        //   // this.temp["tree"] = this.dataSource["tree"].valueOf();
        //   // this.temp = "ehe";
          
        // }
        
        
      },err=>{
        console.log(err);
      }
    )

    
    this.title.setTitle("Tree");
    
  }
  

}
