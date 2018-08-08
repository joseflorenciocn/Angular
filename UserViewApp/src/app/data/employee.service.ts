import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../Employees';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  public getEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>("https://secure-ocean-44491.herokuapp.com/employees");
  }

}
