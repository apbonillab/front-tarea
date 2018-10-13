import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanFilterResultComponent } from './plan-filter-result.component';

describe('PlanFilterResultComponent', () => {
  let component: PlanFilterResultComponent;
  let fixture: ComponentFixture<PlanFilterResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanFilterResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanFilterResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
