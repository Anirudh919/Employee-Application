import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-view-all-employee',
  templateUrl: './view-all-employee.component.html',
  styleUrls: ['./view-all-employee.component.css'],
})
export class ViewAllEmployeeComponent implements OnInit {
  Employee: any = [];
  constructor(private _api: ApiService) {}

  ngOnInit(): void {
    this.ReadEmployee();
  }

  ReadEmployee() {
    this._api.EmployeeDetail().subscribe((data: any) => {
      this.Employee = data;
      console.log(this.Employee);
    });
  }

  DeleteEmployeeDetail(employee: { empid: any }, index: any) {
    if (window.confirm('Are You Sure?')) {
      this._api.deleteEmployee(employee.empid).subscribe((data) => {
        this.Employee.splice(index, 1);
      });
    }
  }
}
