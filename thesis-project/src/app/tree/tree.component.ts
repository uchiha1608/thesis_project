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
                               { id: 1, name: "Hoàng Tổng",years:"1909-2049", img: "assets/img/chautham.jpg" },
                               { id: 4, pid: 1,name: "Hoàng Đức Trí",years:"1919-2049",  img: "assets/img/male-users.png"},
                               { id: 2, pid: 1, name: "Hoàng Thị Nữ",years:"1920-2069",img: "assets/img/chipau.jpg" },
                               { id: 3, pid: 1, name: "Hoàng Hào",years:"1921-2059", img: "assets/img/ehe.jpg" },
                               { id: 5, pid: 1, name: "Hoàng Tộc",years:"1922-2073", img: "assets/img/male-users.png" },
                               { id: 6, pid: 2, name: "Hoàng Gia Lệ",years:"1909-2000", img: "assets/img/female-users.png" },
                               { id: 7, pid: 2, name: "Hoàng Thắm",years:"1909-2049", img: "assets/img/female-users.png" },
                               { id: 8, pid: 3, name: "Hoàng Hà",years:"1909-2049", img: "assets/img/female-users.png" },
                               { id: 9, pid: 7, name: "Hoàng Như Quỳnh",years:"1909-2049", img:'assets/img/female-users.png'},
                               { id: 10, pid: 1, name: "Hoàng Quý",years:"1909-2049", img:'assets/img/male-users.png'},
                               { id: 11, pid: 10,name: "Hoàng Gia Lệ",years:"1909-2049", img: "assets/img/male-users.png"},
                               { id: 12, pid: 11,name: "Hoàng Thơ",years:"1909-2049", img: "assets/img/male-users.png"},
                               { id: 13, pid: 12,name: "Hoàng Thọ",years:"1909-2049", img: "assets/img/male-users.png"},
                               { id: 14, pid: 13,name: "Hoàng Thanh Tú",years:"1909-2049", img: "assets/img/male-users.png"},
                               { id: 15, pid: 14,name: "Hoàng Gia Tùy Tục",years:"1909-2049", img: "assets/img/male-users.png"},
                               { id: 16, pid: 15,name: "Hoàng Thị Thắm",years:"1909-2049", img: "assets/img/male-users.png"},
                               { id: 17, pid: 16,name: "Hoàng Thị Lài",years:"1909-2049", img: "assets/img/male-users.png"},
                               { id: 18, pid: 17,name: "Hoàng Mộng",years:"1909-2049", img: "assets/img/male-users.png"},
                               { id: 19, pid: 18,name: "Hoàng Tục",years:"1909-2049", img: "assets/img/male-users.png"},
                               { id: 20, pid: 19,name: "Hoàng Cấm",years:"1909-2049", img: "assets/img/male-users.png"},
                               { id: 21, pid: 19,name: "Hoàng Cầm",years:"1909-2049", img: "assets/img/male-users.png"},
                               { id: 22, pid: 20,name: "Hoàng Phúc",years:"1909-2049", img: "assets/img/male-users.png"},
                               { id: 23, pid: 20,name: "Hoàng Thức",years:"1909-2049", img: "assets/img/female-users.png"},
                               { id: 24, pid: 20,name: "Hoàng Trần Gia",years:"1909-2049", img: "assets/img/female-users.png"},
                               { id: 25, pid: 4,name: "Hoàng Tiên",years:"1940-1963", img: "assets/img/female-users.png"},
                               { id: 26, pid: 4,name: "Hoàng Tiền",years:"1945-1996", img: "assets/img/male-users.png"},
                               { id: 27, pid: 4,name: "Hoàng Thị Lại",years:"1950-2000", img: "assets/img/female-users.png"},
                               { id: 28, pid: 25,name: "Hoàng Văn", img: "assets/img/male-users.png"},
                               { id: 29, pid: 25,name: "Hoàng Thái", img: "assets/img/male-users.png"},
                               { id: 30, pid: 28,name: "Hoàng Thị Thắm", img: "assets/img/female-users.png"},
                               { id: 31, pid: 28,name: "Hoàng Nga", img: "assets/img/female-users.png"},
                               { id: 32, pid: 31,name: "Hoàng Thị Uyên", img: "assets/img/female-users.png"},
                               { id: 33, pid: 32,name: "Hoàng Gia Định", img: "assets/img/male-users.png"},
                               { id: 34, pid: 32,name: "Hoàng Châu Cách Cách", img: "assets/img/female-users.png"},
                               { id: 35, pid: 32,name: "Hoàng Dương", img: "assets/img/male-users.png"},
                               { id: 36, pid: 34,name: "Hoàng Văn Bá", img: "assets/img/male-users.png"},
                               { id: 37, pid: 34,name: "Hoàng Thị Tú Nữ", img: "assets/img/male-users.png"},
                               { id: 38, pid: 34,name: "Hoàng Thị Thái", img: "assets/img/male-users.png"},
                               { id: 39, pid: 38,name: "Hoàng Thị Vi", img: "assets/img/male-users.png"},
                               { id: 40, pid: 38,name: "Hoàng Thảo", img: "assets/img/male-users.png"},
                               { id: 41, pid: 38,name: "Hoàng Cắm", img: "assets/img/male-users.png"},
                               { id: 42, pid: 40,name: "Hoàng Tuyền", img: "assets/img/male-users.png"},
                               { id: 43, pid: 41,name: "Hoàng Văn Minh", img: "assets/img/male-users.png"},
                               { id: 44, pid: 41,name: "Hoàng Bạch", img: "assets/img/male-users.png"},
                               { id: 45, pid: 42,name: "Hoàng Hắc Tố", img: "assets/img/male-users.png"},
                               { id: 46, pid: 2,name: "Hoàng Thiên", img: "assets/img/male-users.png"},
                               { id: 47, pid: 3,name: "Hoàng Phục",years:"1930-1999", img: "assets/img/male-users.png"},
                               { id: 48, pid: 2,name: "Hoàng Lữ Gia", img: "assets/img/male-users.png"},
                               { id: 49, pid: 3,name: "Hoàng Thị Yến",years:"1931-1999", img: "assets/img/male-users.png"},
                               { id: 50, pid: 46,name: "Hoàng Tạ", img: "assets/img/male-users.png"},

                           ]
                       }); 
            
  }

}
