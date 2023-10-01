import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { catchError, map, Observable, pipe, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUri: string = 'http://localhost:3000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }

  Login(url: any, payload: any) {
    return this.http.post(`${this.baseUri}${url}`, payload).pipe(
      map((res) => {
        return res;
      })
    );
  }

  Register(url: any, payload: any) {
    return this.http.post(`${this.baseUri}${url}`, payload).pipe(
      map((res) => {
        return res;
      })
    );
  }

  EmployeeDelete(id: any): Observable<any> {
    let url = `${this.baseUri}/employeedelete/${id}`;
    return this.http
      .delete(url, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage : ${error.message} `;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }

  EmployeeDetail() {
    return this.http.get(`${this.baseUri}/employeedetail`);
  }

  DepartmentDetail() {
    return this.http.get(`${this.baseUri}/departmentdetail`);
  }

  LocationDetail() {
    return this.http.get(`${this.baseUri}/locationdetail`);
  }

  departmentdetail(id: any): Observable<any> {
    let url = `${this.baseUri}/departmentdetail/${id}`;

    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: any) => {
        return res[0] || {};
      }),
      catchError(this.errorMgmt)
    );
  }

  jobDetail() {
    return this.http.get(`${this.baseUri}/jobdetail`);
  }

  mgrid() {
    return this.http.get(`${this.baseUri}/mgr`);
  }

  AddEmployee(data: any): Observable<any> {
    let url = `${this.baseUri}/employeeadd`;
    return this.http.post(url, data).pipe(catchError(this.errorMgmt));
  }

  Getdetaildemployee(id: any): Observable<any> {
    let url = `${this.baseUri}/employee/${id}`;
    return this.http
      .get(url, { headers: this.headers })
      .pipe(map((res: any) => {
        return res[0] || {};
      }),
        catchError(this.errorMgmt));
  }

  GetdetaildemployeeName(name: any): Observable<any> {
    let url = `${this.baseUri}/employeename/${name}`;
    console.log(url)
    return this.http.get(url)

  }


  AddDepartment(data: any): Observable<any> {
    let url = `${this.baseUri}/departmentadd`;
    return this.http.post(url, data).pipe(catchError(this.errorMgmt));
  }


  UpdateEmployee(id: any, data: any): Observable<any> {
    let url = `${this.baseUri}/employeeupdate`;
    return this.http
      .put(url, data, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }

  deleteEmployee(id: any): Observable<any> {
    let url = `${this.baseUri}/employeedelete/${id}`;
    return this.http
      .delete(url, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }

  deleteDepartment(id: any): Observable<any> {
    let url = `${this.baseUri}/departmentdelete/${id}`;
    return this.http
      .delete(url, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }
}
