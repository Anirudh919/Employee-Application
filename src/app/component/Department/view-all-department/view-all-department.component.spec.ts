import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllDepartmentComponent } from './view-all-department.component';

describe('ViewAllDepartmentComponent', () => {
  let component: ViewAllDepartmentComponent;
  let fixture: ComponentFixture<ViewAllDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllDepartmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
