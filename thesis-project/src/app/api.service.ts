import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private htttp: HttpClient)
  {}
  loginService(formData: FormData): Observable<any>{
    const url = "http://localhost/api.com/auth.php"
    // const url = "http://localhost/api.com/auth.php"
    return  this.htttp.post<any>(url, formData);
  }
  treeEditService(formData: FormData): Observable<any>{
    const url = "http://localhost/api.com/treeEdit.php";
    return this.htttp.post<any>(url,formData);
  }
  accountEditService(formData: FormData): Observable<any>{
    const url = "http://localhost/api.com/accountEdit.php";
    return this.htttp.post<any>(url,formData);
  }
  treeLoadingService(formData: FormData): Observable<any>{
    const url = "http://localhost/api.com/treeHandler.php";
    return this.htttp.post<any>(url, formData);
  }
  treeAddService(addForm: FormData): Observable<any>{
    const url = "http://localhost/api.com/treeHandler.php";
    return this.htttp.post<any>(url, addForm);
  }
  adminService(formData: FormData): Observable<any>{
    const url = "http://localhost/api.com/admin.php";
    return this.htttp.post<any>(url, formData);
  }
  imgService(formData: FormData): Observable<any>{
    const url = "";
    return this.htttp.post<any>(url, formData);
  }
}
