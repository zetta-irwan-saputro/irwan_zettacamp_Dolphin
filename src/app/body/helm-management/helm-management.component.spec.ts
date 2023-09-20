import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelmManagementComponent } from './helm-management.component';

describe('HelmManagementComponent', () => {
  let component: HelmManagementComponent;
  let fixture: ComponentFixture<HelmManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelmManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelmManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
