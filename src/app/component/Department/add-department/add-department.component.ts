import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {
  submitted=false;

  location:any=[];
  mgr:any=[];
  
  DepartmentForm=this.Form.group({
    dname:[''],
    mgrid:[''],
    locationid:['']
  })
  router:any;
  ngZone:any;

  constructor(private Form:FormBuilder,private _api:ApiService) { }

  ngOnInit(): void {
    this.ReadMgr();
    this.ReadLocation();
  }

  ReadMgr() {
    this._api.mgrid().subscribe((data: any) => {
      this.mgr = data;
    });
  }

  ReadLocation(){
    this._api.LocationDetail().subscribe((data:any)=>{
      this.location=data;
      console.log(this.location)
    })
  }
 

  onSubmit() {
    console.log(this.DepartmentForm.value);
    this.submitted = true;
    if (!this.DepartmentForm.valid) {
      return false;
    } else {
      return this._api.AddDepartment(this.DepartmentForm.value).subscribe({
        complete: () => {
          console.log('Department Successful Insert!!');
            this.ngZone.run(() => this.router.navigateByUrl('/department-list'));
        },
        error: (e) => {
          console.log(e+"from ts");
        },
      });
      return false;
    }
  }

}
