import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../data/employee.service';
import { Employee } from '../Employees'
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  public employees:Employee[];
  private empSub;
  private loadingError:Boolean = false;
  private showspinner:Boolean = true;
  

  constructor(private es:EmployeeService) { }

  ngOnInit() {

    this.empSub = this.es.getEmployees().subscribe((emp_returned)=>{
      
                  this.employees = emp_returned
                  this.showspinner = false}, 
                  (e) => {this.loadingError = true});

  }

  ngOnDestroy(){

    if (this.empSub)
    {
      this.empSub.unsubscribe();
    } 

  }

}
