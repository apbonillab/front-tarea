import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterOutlet } from "@angular/router";
import { PlanListComponent } from './plan-list.component';

import {
  RouterTestingModule
} from '@angular/router/testing';
import { PlanService } from '../plan.service';
import { HttpClientModule } from '@angular/common/http';

describe('PlanListComponent', () => {
  let component: PlanListComponent;
  let fixture: ComponentFixture<PlanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanListComponent ],
      providers:[{provide: Router },
        RouterOutlet,PlanService],
      imports: [ RouterTestingModule,HttpClientModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
