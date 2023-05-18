import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-view-all-department',
  templateUrl: './view-all-department.component.html',
  styleUrls: ['./view-all-department.component.css'],
})
export class ViewAllDepartmentComponent implements OnInit {
  departments: any = [];
  constructor(private _api: ApiService) {}

  ngOnInit(): void {
    this.ReadDepartment();
  }

  ReadDepartment() {
    this._api.DepartmentDetail().subscribe((data: any) => {
      this.departments = data;
    });
  }

  DeleteDepartment(department: { deptid: any }, index: any) {
    if (window.confirm('Are you sure')) {
      this._api.deleteDepartment(department.deptid).subscribe((data) => {
        this.departments.splice(index, 1);
      });
    }
  }
}
