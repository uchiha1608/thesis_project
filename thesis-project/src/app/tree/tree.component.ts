import { Component, OnInit } from '@angular/core';
import {Renderer2, Inject} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import OrgChart from "@balkangraph/orgchart.js";
import { ApiService } from '../api.service';
import { Title } from '@angular/platform-browser';
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
  ) {}
  dataSource = {};
  
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
  username = "";
  ngOnInit(){
    const formData: FormData = new FormData();
    formData.append('username', this.username);
    this.apiService.treeLoadingService(formData).subscribe(
      res=>{

        console.log(JSON.parse(res));
        console.log(JSON.stringify(res));
        this.dataSource = res["tree"];
        
        // console.log(this.dataSource);
      },err=>{
        console.log(err);
      }
    )
    this.title.setTitle("Tree");
    OrgChart.templates.diva.link = '<path stroke-linejoin="round" stroke="grey" stroke-width="2px" fill="none"d="{rounded}"/>';
              var chart = new OrgChart(document.getElementById("tree"), {
                  mouseScrool: OrgChart.action.none,
                  template:"diva",
                  enableDragDrop: true,
                     nodeMenu:{
                           details: {text:"Details"},
                           edit: {text:"Edit"},
                           add: {text:"Add"},
                           remove: {text:"Remove"}
                           },
                           
                           collapse: {
                            level: 2
                          },
                           nodeBinding: {
                               field_0: "name",
                               field_1: "years",
                               img_0: "img"
                           },
                           nodes: [
                               { id: 1, name: "Hoàng Tổng", img: "https://i.pinimg.com/originals/22/15/61/221561cceb779cfb4e04512450cb2633.jpg" },
                               { id: 4, pid: 1,name: "Hoàng Thống",  img: ""},
                               { id: 2, pid: 1, name: "Hoàng Thị Nữ",img: "https://preview.redd.it/fpyvp50cmbk51.png?width=1483&format=png&auto=webp&s=61a5802c93245a668debe1e7d34c7d061b3d384e" },
                               { id: 3, pid: 1, name: "Hoàng Hào", img: "https://genk.mediacdn.vn/2017/photo-1-1503302064237.jpg" },
                               { id: 5, pid: 1, name: "Hoàng Tộc", img: "https://i0.wp.com/wp-corp.qoo-app.com/en/wp-content/uploads/sites/3/2020/12/20120802550144.jpg" },
                               { id: 6, pid: 2, name: "Hoàng Gia Lệ", img: "https://danbooru.donmai.us/data/sample/5a/63/sample-5a6397e72a556d2085e2386ef6eec7a4.jpg" },
                               { id: 7, pid: 2, name: "Hoàng Thắm", img: "https://danbooru.donmai.us/data/original/bd/cf/__utage_arknights_drawn_by_pipidan__bdcf5ca5bd08786c000ae6bc80782c9c.jpg" },
                               { id: 8, pid: 3, name: "Hoàng Hà", img: "data:image/png;base64,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" },
                               { id: 9, pid: 7, name: "Hoàng Như Quỳnh", img:'assets/img/female-users.png'},
                               { id: 10, pid: 1, name: "Hoàng Quý"},
                               { id: 11, pid: 10},
                               { id: 12, pid: 11},
                               { id: 13, pid: 12},
                               { id: 14, pid: 13},
                               { id: 15, pid: 14},
                               { id: 16, pid: 15},
                               { id: 17, pid: 16},
                               { id: 18, pid: 17},
                               { id: 19, pid: 18},
                               { id: 20, pid: 19},
                               { id: 21, pid: 19},
                               { id: 22, pid: 20},
                               { id: 23, pid: 20},
                               { id: 24, pid: 20},
                               { id: 25, pid: 4},
                               { id: 26, pid: 4},
                               { id: 27, pid: 4},
                               { id: 28, pid: 25},
                               { id: 29, pid: 25},
                               { id: 30, pid: 28},
                               { id: 31, pid: 28},
                               { id: 32, pid: 31},
                               { id: 33, pid: 32},
                               { id: 34, pid: 32},
                               { id: 35, pid: 32},
                               { id: 36, pid: 34},
                               { id: 37, pid: 34},
                               { id: 38, pid: 34},
                               { id: 39, pid: 38},
                               { id: 40, pid: 38},
                               { id: 41, pid: 38},
                               { id: 42, pid: 40},
                               { id: 43, pid: 41},
                               { id: 44, pid: 41},
                               { id: 45, pid: 42},
                               { id: 46, pid: 2},
                               { id: 47, pid: 3},
                               { id: 48, pid: 2},
                               { id: 49, pid: 3},
                               { id: 50, pid: 46},

                           ]
                       }); 
            
  }

}
