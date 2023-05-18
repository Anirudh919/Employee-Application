import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})

export class AddEmployeeComponent implements OnInit {
  submitted = false;
  mgr: any = [];
  department: any = [];
  job: any = [];
  EmployeeForm = this.Form.group({
    ename: [''],
    jobid: [''],
    mgrid: [''],
    hiredate: [''],
    salary: [''],
    comission: [''],
    deptid: [''],
  });
  ngZone: any;
  router: any;

  constructor(private _api: ApiService, private Form: FormBuilder) {}

  ngOnInit(): void {
    this.ReadDepartment();
    this.ReadJob();
    this.ReadMgr();
  }

  ReadDepartment() {
    this._api.DepartmentDetail().subscribe((data: any) => {
      this.department = data;
    });
  }

  ReadJob() {
    this._api.jobDetail().subscribe((data: any) => {
      this.job = data;
    });
  }

  ReadMgr() {
    this._api.mgrid().subscribe((data: any) => {
      this.mgr = data;
    });
  }

  onSubmit() {
    console.log(this.EmployeeForm.value);
    this.submitted = true;
    if (!this.EmployeeForm.valid) {
      return false;
    } else {
      return this._api.AddEmployee(this.EmployeeForm.value).subscribe({
        complete: () => {
          console.log('Employee Successful Insert!!'),
            this.ngZone.run(() => this.router.navigateByUrl('/employee-list'));
        },
        error: (e) => {
          console.log(e);
        },
      });
      // return false;
    }
  }
}
