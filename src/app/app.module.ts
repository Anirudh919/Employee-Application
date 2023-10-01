import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { ViewAllEmployeeComponent } from './component/Employee/view-all-employee/view-all-employee.component';
import { UpdateEmployeeComponent } from './component/Employee/update-employee/update-employee.component';
import { AddEmployeeComponent } from './component/Employee/add-employee/add-employee.component';
import { ViewAllDepartmentComponent } from './component/Department/view-all-department/view-all-department.component';
import { UpdateDepartmentComponent } from './component/Department/update-department/update-department.component';
import { AddDepartmentComponent } from './component/Department/add-department/add-department.component';
import { DatePipe } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    ViewAllEmployeeComponent,
    UpdateEmployeeComponent,
    AddEmployeeComponent,
    ViewAllDepartmentComponent,
    UpdateDepartmentComponent,
    AddDepartmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
