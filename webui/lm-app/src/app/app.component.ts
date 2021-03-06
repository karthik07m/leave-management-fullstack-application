import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Employee } from './employee/employee';
//import { Employee } from './employee/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // template:'<app-manager-actions>',
  providers: [ EmployeeService ]
})
export class AppComponent implements OnInit {
  constructor(private employeeService: EmployeeService) { }

  title = 'Leave Management Application';
  employees: Employee[];

  getEmployees(): void {
      this.employeeService.getEmployees().subscribe(data=>this.employees=data,err=>console.log(err));
    
  }

   ngOnInit(): void {
    this.getEmployees();
  } 
  
}
