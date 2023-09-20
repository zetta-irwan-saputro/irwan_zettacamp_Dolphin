import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelmDetailComponent } from './helm-detail.component';

describe('HelmDetailComponent', () => {
  let component: HelmDetailComponent;
  let fixture: ComponentFixture<HelmDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelmDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelmDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
