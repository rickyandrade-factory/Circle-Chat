import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincouponsComponent } from './admincoupons.component';

describe('AdmincouponsComponent', () => {
  let component: AdmincouponsComponent;
  let fixture: ComponentFixture<AdmincouponsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincouponsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
 