import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  submitted = false;
  editForm!: FormGroup;
  
  constructor(public Form: FormBuilder,
    private actRoute: ActivatedRoute,
    private _api: ApiService,
    private router: Router,
    public datepipe: DatePipe) { }

  ngOnInit(): void {
    let id=this.actRoute.snapshot.paramMap.get("id");
    this.getEmployee(id);
    
  this.editForm = this.Form.group({
    empid: [id],
    ename: [''],
    jobid: [''],
    mgrid: [''],
    hiredate: [''],
    salary: [''],
    comission: [''],
    deptid: [''],
  });
  }

getEmployee(id: any) {
  this._api.Getdetaildemployee(id).subscribe((data) => {
    this.editForm.patchValue({
      ename: data['ename'],
      jobid: data['jobid'],
      mgrid: data['mgrid'],
      hiredate: this.datepipe.transform(data['hiredate'], 'yyyy-MM-dd'),
      salary: data['salary'],
      comission: data['comission'],
      deptid: data['deptid'],
    });
  });
}

onSubmit() {
  this.submitted = true;

  if (!this.editForm.valid) {
    return false;
  } else {
    if (window.confirm('Are you sure?')) {
      let id = this.actRoute.snapshot.paramMap.get('empid');
      this._api.UpdateEmployee(id, this.editForm.value).subscribe({
        complete: () => {
          this.router.navigateByUrl('/employees');
          console.log('Content updated successfully!');
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
    return true;
  }
}

}


