import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-view-all-employee',
  templateUrl: './view-all-employee.component.html',
  styleUrls: ['./view-all-employee.component.css'],
})
export class ViewAllEmployeeComponent implements OnInit {
  Employee: any = [];
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [3, 6, 9, 12];

  constructor(private _api: ApiService) { }


  ngZone: any;
  router: any;
  ename!: any
  ngOnInit(): void {
    this.ReadEmployee();

  }

  ReadEmployee() {
    this._api.EmployeeDetail().subscribe((data) => {
      this.Employee = data;
      console.log(this.Employee)
    },
      (err) => {
        console.log('read employee', err);
      }
    )

  }

  DeleteEmployeeDetail(employee: { empid: any }, index: any) {
    if (window.confirm('Are You Sure?')) {
      this._api.deleteEmployee(employee.empid).subscribe((data) => {
        this.Employee.splice(index, 1);
      });
    }
  }

  empTable() {
    this.ename = ''
    this.ReadEmployee()
  }

  onSearch() {
    return this._api.GetdetaildemployeeName(this.ename).subscribe((data) => {
      console.log(data);
      this.Employee = data
    })
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.ReadEmployee();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.ReadEmployee();
  }
}
