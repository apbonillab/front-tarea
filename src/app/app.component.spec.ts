import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {RouterTestingModule} from '@angular/router/testing';
import { PlanListComponent } from './plan/plan-list/plan-list.component';
import { HttpClientModule } from '@angular/common/http';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PlanListComponent
      ],
      providers:[],
      imports: [ RouterTestingModule,HttpClientModule ] 
    }).compileComponents();
  }));

  
});
