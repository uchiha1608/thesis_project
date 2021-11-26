import { Component, OnInit } from '@angular/core';
import {Renderer2, Inject} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import OrgChart from "@balkangraph/orgchart.js";
import { ApiService } from '../api.service';
import { Title } from '@angular/platform-browser';
import { delay, toArray } from 'rxjs/operators';
import { stringify } from 'querystring';
import { send } from 'process';
import { Chart } from 'chart.js';
import { HttpClient, HttpHandler } from '@angular/common/http';


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
    private httpClient: HttpClient,
    @Inject(DOCUMENT) private _document,
  ) {
  }
  
  declare idForAdd:number;
  declare newid: number;
  dataSource = "";
  temp = "";
  temp2;
  temp3;
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
    return localStorage.getItem(item) || '';
  }
  username = this.getItemm('username');
  
  onAdd(idTemp: number){
    var formRes: FormData = new FormData();
    formRes.append('request', 'add');
    var res: Number = 0;
    this.httpClient.post<HttpClient>('http://localhost/api.com/treeHandler.php', formRes).subscribe(
      res2=>{
        window.alert('ham add');
        console.log(idTemp);
        idTemp = res2["id"] + 1;
        console.log('goi hgam');
        console.log(idTemp);
        return idTemp;
        //return this.idForAdd;
        //window.alert(this.idForAdd);
        //console.log(this.idForAdd);
        //var newNodeData = {id: newid, pid: args.node.id};
        // sender.addNode(newNodeData, null, true);
        }, err=>{
                    
        }
        
      );
      
      //window.alert(this.idForAdd);
      //window.alert(res);
  }

  async ngOnInit(){ 
    OrgChart.templates.diva.link = '<path stroke-linejoin="round" stroke="grey" stroke-width="2px" fill="none"d="{rounded}"/>';
    var chart = new OrgChart(document.getElementById("tree"), {
      searchFields: ["name", "id"],
            showXScroll: OrgChart.scroll.visible,
            showYScroll: OrgChart.scroll.visible,
            mouseScrool: OrgChart.action.zoom,
            enableKeyNavigation: true,
            template:"diva",
            
            align: OrgChart.ORIENTATION,
            toolbar:{
              layout: true,
              zoom: true,
              fit: true,
              expandAll: true,
              //collapseAll: true
            },
            enableDragDrop: false,
            menu: {
              pdf: { text: "Export PDF" },
              png: { text: "Export PNG" },
              svg: { text: "Export SVG" },
              csv: { text: "Export CSV" }
            },
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
              }
    })
    const formData: FormData = new FormData();
    formData.append('username', this.username);
    const addForm: FormData = new FormData();
    var nodes;
    addForm.append('request', 'add');
    this.apiService.treeLoadingService(formData).subscribe(
      res=>{
        this.dataSource = res;
        this.dataSource["tree"] = JSON.stringify(this.dataSource["tree"]);
        this.temp = this.dataSource["tree"];
        this.temp2 = this.temp;
        this.temp3 = JSON.parse("[" + this.temp2 + "]");
        nodes = this.temp3[0];
        chart.load(nodes);
        // OrgChart.templates.diva.link = '<path stroke-linejoin="round" stroke="grey" stroke-width="2px" fill="none"d="{rounded}"/>';
        //   var chart = new OrgChart(document.getElementById("tree"), {
        //     searchFields: ["name", "id"],
        //     showXScroll: OrgChart.scroll.visible,
        //     showYScroll: OrgChart.scroll.visible,
        //     mouseScrool: OrgChart.action.zoom,
        //     enableKeyNavigation: true,
        //     template:"diva",
            
        //     align: OrgChart.ORIENTATION,
        //     toolbar:{
        //       layout: true,
        //       zoom: true,
        //       fit: true,
        //       expandAll: true,
        //       //collapseAll: true
        //     },
        //     enableDragDrop: false,
        //     menu: {
        //       pdf: { text: "Export PDF" },
        //       png: { text: "Export PNG" },
        //       svg: { text: "Export SVG" },
        //       csv: { text: "Export CSV" }
        //     },
        //     nodeMenu:{
        //       details: {text:"Details"},
        //       edit: {text:"Edit"},
        //       add: {text:"Add"},
        //       remove: {text:"Remove"}
        //     },
              
                           
        //       collapse: {
        //         level: 3
        //       },
        //       nodeBinding: {
        //         field_0: "name",
        //         field_1: "years",
        //         img_0: "img"
        //       },                           
        //       nodes: 
        //         this.temp3[0]                                                    
        //   });
          
      
          document.getElementById("selectTemplate").addEventListener("change", function () {
            chart.config.template = (document.getElementById("selectTemplate") as HTMLInputElement).value;
            //chart.config.template = this.value();
            chart.draw();
          });
          var newid = this.idForAdd;
          //console.log(newid);  
          //this.onAdd(newid);
          var formRes: FormData = new FormData();
          formRes.append('request', 'add');
          // chart.on('key-down',function(sender, args){
            
          //   if (args.node){
          //     if (args.event.code == "KeyN"){
          //       console.log('chay xuong day');
                
          //       const addForm: FormData = new FormData();
          //       addForm.append('request', 'add');
          //       //console.log(addForm.get('request'));
          //       //this.onAdd(newid);
          //       // let idRes = () =>
          //       // {
          //       //   this.onAdd(newid);
          //       // }
          //       console.log(addForm.get('request'));
          //       this.apiService.treeLoadingService(addForm).subscribe(
          //         res=>{
          //           window.alert("truong");
          //         }, err=>{

          //         }

          //       )
          //       //this.httpClient.post<any>('http://localhost/api.com/treeHandler.php', addForm).subscribe({})
          //       // this.httpClient.post<HttpClient>('http://localhost/api.com/treeHandler.php', addForm).subscribe(
          //       //   res2=>{
          //       //     newid = res2["id"] + 1;
          //       //     console.log(newid);
          //       //     var newNodeData = {id: newid, pid: args.node.id};
          //       //     sender.addNode(newNodeData, null, true);
          //       //   }, err=>{
                    
          //       //   }
          //       // );
          //       console.log(this.newid);
                        
          //       addForm.append('request', "add");
                
          //       // this.apiService.treeLoadingService(formRes).subscribe(
          //       //   res2=>{
          //       //     newid = res2["id"] + 1;
          //       //     console.log(newid);
          //       //     var newNodeData = {id: newid, pid: args.node.id};
          //       //     sender.addNode(newNodeData, null, true);
          //       //   }, err=>{
                    
          //       //   }
          //       // )
          //       // var newNodeData = { id: sender.generateId(), pid: args.node.id};
          //       // sender.addNode(newNodeData,null, true);
          //       // console.log(newNodeData['id']);
          //       // console.log(newid);
          //       // sender.editUI.show(newid);
                
          //     }
          //   }
          // })
      },err=>{
        console.log(err);
      }
    )
    chart.on('add', function(sender, args){
      //var httpClient;
      var formData: FormData= new FormData();
      formData.append('request', 'add');
      var httpClient: HttpClient;
      //var apiService: ApiService = new ApiService(httpClient);
      
      httpClient.post<any>('http://localhost/api.com/treeHandler.php', formData).subscribe(
        res=>{
          window.alert('tesssss');
        }, err=>{

        }
      )
    })
    chart.on('key-down',function(sender, args){
      if (args.event.code == "KeyN"){
        
        window.alert('mlem na');
        this.apiService.treeLoadingService(addForm).subscribe(
          resAdd =>{
            console.log(resAdd);
          }, err=>{

          }
        )
      }
      // if (args.node){
      //   if (args.event.code == "KeyN"){
      //     console.log('chay xuong day');          
      //     const addForm: FormData = new FormData();
      //     addForm.append('request', 'add');
      //     console.log(addForm.get('request'));
      //     // this.apiService.treeLoadingService(addForm).subscribe(
      //     //   res=>{
      //     //     window.alert("truong");
      //     //   }, err=>{
      //     //   }
      //     // )
      //     //this.httpClient.post<any>('http://localhost/api.com/treeHandler.php', addForm).subscribe({})
      //     console.log(this.newid);     
      //     addForm.append('request', "add");          
      //     // this.apiService.treeLoadingService(formRes).subscribe(
      //     //   res2=>{
      //     //     newid = res2["id"] + 1;
      //     //     console.log(newid);
      //     //     var newNodeData = {id: newid, pid: args.node.id};
      //     //     sender.addNode(newNodeData, null, true);
      //     //   }, err=>{
              
      //     //   }
      //     // )      
      //   }
      // }
    })
     
    
    this.title.setTitle("Tree");
  }
  
}
function onAdd() {
  throw new Error('Function not implemented.');
}

