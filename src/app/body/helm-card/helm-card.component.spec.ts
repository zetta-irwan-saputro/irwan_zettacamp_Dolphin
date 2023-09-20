import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelmCardComponent } from './helm-card.component';

describe('HelmCardComponent', () => {
  let component: HelmCardComponent;
  let fixture: ComponentFixture<HelmCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelmCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelmCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
