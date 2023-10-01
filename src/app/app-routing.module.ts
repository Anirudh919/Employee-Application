import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ViewAllEmployeeComponent } from './component/Employee/view-all-employee/view-all-employee.component';
import { AddEmployeeComponent } from './component/Employee/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './component/Employee/update-employee/update-employee.component';
import { ViewAllDepartmentComponent } from './component/Department/view-all-department/view-all-department.component';
import { UpdateDepartmentComponent } from './component/Department/update-department/update-department.component';
import { AddDepartmentComponent } from './component/Department/add-department/add-department.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: 'employees', component: ViewAllEmployeeComponent },
      { path: 'employee/edit/:id', component: UpdateEmployeeComponent },
      { path: 'add-employee', component: AddEmployeeComponent },
      { path: 'department-list', component: ViewAllDepartmentComponent },
      { path: 'add-department', component: AddDepartmentComponent },
      { path: 'update-department/:id', component: UpdateDepartmentComponent },
    ],

  },
  { path: '**', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
