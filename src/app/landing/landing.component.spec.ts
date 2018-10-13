import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingComponent } from './landing.component';
import { PlanListComponent } from '../plan/plan-list/plan-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PlanService } from '../plan/plan.service';


describe('LandingComponent', () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanListComponent,LandingComponent ],
      imports:[HttpClientModule],
      providers:[PlanService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
});
