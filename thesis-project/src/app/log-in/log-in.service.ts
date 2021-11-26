import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { LogInComponent } from './log-in.component';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ErrorMessage } from 'ng-bootstrap-form-validation';

@Injectable({
  providedIn: 'root'
})

export class LogInService {

  constructor(private http: HttpClient) {
    
   }
}
