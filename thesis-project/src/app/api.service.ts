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
  imgService(): Observable<any>{
    const key = "F6yj8Gf0VVqhl_cXPQLlVNV8YazWDuF__zWGYG8KmPY";
    const page = 20;
    const per_page = 3;
    return this.htttp.get(`https://api.unsplash.com/photos/?client_id=F6yj8Gf0VVqhl_cXPQLlVNV8YazWDuF__zWGYG8KmPY`);
  }
  fbLoginService(fbForm: FormData): Observable<any>{
    const url = "http://localhost/api.com/fblogin.php";
    return this.htttp.post<any>(url, fbForm);
  }
  message(message: FormData): Observable<any>{
    const url="http://localhost/api.com/message.php";
    return this.htttp.post<any>(url, message);
  }
}
