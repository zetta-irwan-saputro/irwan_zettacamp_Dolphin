import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelmListComponent } from './helm-list.component';

describe('HelmListComponent', () => {
  let component: HelmListComponent;
  let fixture: ComponentFixture<HelmListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelmListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelmListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
