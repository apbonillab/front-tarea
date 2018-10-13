import { Component, OnInit, Input, Injectable } from '@angular/core';
import { PlanFilter } from '../../domain/planFilter';
import { Plan } from '../../domain/plan';

import { Router } from '@angular/router';
import { PlanService } from 'src/app/plan/plan.service';

@Component({
  selector: 'app-plan-filter-result',
  templateUrl: './plan-filter-result.component.html',
  styleUrls: ['./plan-filter-result.component.css']
})

@Injectable()
export class PlanFilterResultComponent implements OnInit {

  planFilter:PlanFilter; 
  plans: Plan[];
  

  constructor(private planService: PlanService,
    private router:Router
    ) { }
  ngOnInit() {
   this.planFilter= this.planService.getPlanFilter();
   this.plans = this.planService.getPlanCustom();
  }

  viewDetailPlan(plan:Plan):void{
    this.planService.setSelectedPlan(plan);
    console.log("plan: "+plan.name);      
    this.router.navigateByUrl('/plan/detail');
}

}
