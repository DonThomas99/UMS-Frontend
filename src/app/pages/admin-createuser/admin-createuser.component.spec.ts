import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateuserComponent } from './admin-createuser.component';

describe('AdminCreateuserComponent', () => {
  let component: AdminCreateuserComponent;
  let fixture: ComponentFixture<AdminCreateuserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCreateuserComponent]
    });
    fixture = TestBed.createComponent(AdminCreateuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
