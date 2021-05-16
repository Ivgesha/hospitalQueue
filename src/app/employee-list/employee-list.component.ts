import { Component, OnInit } from '@angular/core';
import { EmpoleeService } from '../empolee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employee: any = [];
  constructor(private _employeeService: EmpoleeService) { }

  ngOnInit(): void {
  }

  getEmployees() {
    this._employeeService.getEmployee().subscribe((data) => this.employee = data);
    console.log(this.employee);
  }



}
