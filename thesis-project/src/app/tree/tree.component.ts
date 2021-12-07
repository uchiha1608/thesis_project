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
import { Callbacks } from 'jquery';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


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
    private router: Router,
    @Inject(DOCUMENT) private _document,
  ) {
  }
  isSelected1 = false;
  isSelected2 = false;
  idForAdd;
  declare newid: number;
  dataSource = "";
  temp = "";
  temp2;
  temp3;
  changed(){
    this.isSelected1 = true;
    this.isSelected2 = true;
    this.ngOnInit();
  }
  fetchData(formData: FormData, username: string){
    function getData(form_data: FormData){
      var api:ApiService;
      form_data.append('request', 'addTest');
      api.treeLoadingService(form_data).subscribe(
        res =>{
          window.alert("Fetch data baby");
          console.log(res);
        }
      );
    }
    // formData.append("username", sessionStorage.getItem("username"));
    // this.apiService.treeLoadingService(formData).subscribe(
    //   res=>{
    //     console.log(res);
    //     this.dataSource = res;
    //   },
    //   err=>{
    //     console.log(err);
    //   })
  }
  getItemm(item){
    return localStorage.getItem(item) || '';
  }
  setNodeData(name: string, item){
    localStorage.setItem(name, item);
  }
  setItemLocal(item){
    localStorage.setItem('id_for_add', item);
  }
  username = this.getItemm('username');
  windowEhe(){
    window.alert(1);
  }
  async onAdd(){
    var formRes: FormData = new FormData();
    formRes.append('request', 'add');
    var res: Number = 0;
    this.httpClient.post<HttpClient>('http://localhost/api.com/treeHandler.php', formRes).subscribe(
      res2=>{       
        res = res2["id"] + 1;
        this.setItemLocal(res);
        //var newNodeData = {id: newid, pid: args.node.id};
        // sender.addNode(newNodeData, null, true);
        }, err=>{                    
      }        
    );
      //window.alert(this.idForAdd);
      //window.alert(res);
  }

  async ngOnInit(){
    if(sessionStorage.getItem('username') == null){
      this.router.navigate(['/home']);
      //window.location.href = '/home';
    }
    
    OrgChart.templates.diva.link = '<path stroke-linejoin="round" stroke="grey" stroke-width="2px" fill="none"d="{rounded}"/>';
    var chart = new OrgChart(document.getElementById("tree"),{
      
      searchFields: ["name", "id", "address"],          
      showXScroll: OrgChart.scroll.visible,
      showYScroll: OrgChart.scroll.visible,
      mouseScrool: OrgChart.action.zoom,
      enableKeyNavigation: true,
      template:"diva",       
      align: OrgChart.CENTER,
      miniMap: true,            
      //orderBy: "id", doi thanh year la ok
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
        details: {text:"View Details"},
        edit: {text:"Edit Infor"},
        add: {text:"Add Child"},
        remove: {text:"Remove"}
      },                           
      collapse: {
        level: 3
      },
      nodeBinding: {
        field_0: "name",
        field_1: "address",
        field_2: "years",
        field_3: "sex",
        field_4: "phone",
        img_0: "img"
      }
    })
    
    const formData: FormData = new FormData();
    formData.append('username', this.username);
    const addForm: FormData = new FormData();
    var nodes;
    const onAddFormData: FormData = new FormData();
    onAddFormData.append('request', 'addTest');
    var afterl;
    chart.on('added', function(){
      //console.log(afterl);
      //chart.editUI.show(afterl);
    })
    chart.on('add', function(sender, node){
      var url = '123';
      var ehe = Object["values"](node)
      console.log("PID :" + ehe[1]);
      console.log("ID :" + ehe[0]);
      //afterl = ehe[0];
      console.log(" chay ham add" + localStorage.getItem("id_for_add"));
      //window.alert(ehe);
      //window.alert(Object["values"](pid[2]));
      $.post("http://localhost/api.com/treeHandler.php", {request: 'add_node', id: 100}).done(function(data){
        window.alert("omg fking god yessssss: " + data["statusCode"]);
        window.alert("add xong ben db roi: "+ ehe[0]);
        console.log("add xong: ");
        console.log(data);
        url =" ehe te ehe";
      });
      //window.alert(chart.get(1)['id']);      
    });
    chart.on('update', function(sender, oldNode, newNode){
    
     var obj1 = Object["values"](oldNode);
     var obj2 = Object["values"](newNode);
     //console.log(obj1);
     //console.log(obj2);
      // $.post("http://localhost/api.com/testpost.php", {request: 'update_node', id: 111}).done(function(data){
      //   window.alert("omg fking god yessssss: " + data["statusCode"]);
      //   console.log(data);
      // });
    });
    chart.on('updated', function(sender, node){
      //window.alert('ehe');
      var ehe = Object["values"](node);
      console.log("Node updated data :" + ehe[0]);
      //window.alert('ehe updated ne ehe');
    })
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
        this.idForAdd = this.onAdd();
        console.log('goi ham trong init ' + this.getItemm('id_for_add'));
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
    
    // chart.on('add', function(sender, args){
    //   //var httpClient;
    //   var formData: FormData= new FormData();
    //   formData.append('request', 'add');
    //   var httpClient: HttpClient;
    //   //var apiService: ApiService = new ApiService(httpClient);
      
    //   httpClient.post<any>('http://localhost/api.com/treeHandler.php', formData).subscribe(
    //     res=>{
    //       window.alert('tesssss');
    //     }, err=>{

    //     }
    //   )
    // })
    chart.on('key-down',function(sender, args){
      if (args.event.code == "KeyN"){
        window.alert(args.node.id);
        window.alert('mlem na');
        
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

