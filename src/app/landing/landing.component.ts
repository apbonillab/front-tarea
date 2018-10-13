import { Component, OnInit } from '@angular/core';
import {PlanService} from '../plan/plan.service';
import {Plan} from '../domain/plan';
import {PlanFilter} from '../domain/planFilter';
import { Router } from '@angular/router';
import {Country} from '../domain/country';
import { FormGroup } from "@angular/forms";
import { PlanType } from "src/app/domain/planType";
import { CitiesService } from "src/app/services/cities.service";
import { City } from "src/app/domain/city";


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private planService: PlanService,
              private router:Router,
              private citiesService:CitiesService
              ) { }

  plans: Plan[];
  plansFilter: Plan[];
  planFilter:PlanFilter; 
  listCountry: Country [];
  listCity: City [];
  listPlanType: PlanType [];
  countryForm: FormGroup;
  countrySelected:string;
  plantype:string;
   
  getPlans(): void {
      this.planService.getPlans()
          .subscribe(plans => this.plans = plans);
  }
  ngOnInit() {
    this.getPlans();
    this.getCountries();
    this.getPlanType(); 
    this.planFilter = new PlanFilter("",1,"","","","","");  
  }

  getCountries():void{
    this.planService.getCountries()
    .subscribe(listCountry => this.listCountry = listCountry);
  }

  getPlanType():void{
    this.planService.getPlansType()
    .subscribe(listPlanType => this.listPlanType = listPlanType);
  }

  onChangeCountry(){
    this.citiesService.getCityByCountry(this.countrySelected).
    subscribe(listCity=> this.listCity = listCity);
  }

  search():void{  
   let nameCity =  this.listCity.filter(e=>{
       return  e.idCities.toString() == this.planFilter.city
    } )[0].name;
    let namePlanType =  this.listPlanType.filter(e=>{
       return  e.idPlanType.toString() == this.planFilter.typePlan
    } )[0].name;
    this.planFilter.nameCity = nameCity;
    this.planFilter.namePlanType= namePlanType;
    this.planService.getPlansCustom(this.planFilter).
    subscribe(plansFilter=> {
      this.planService.savePlanCustom(plansFilter); 

      this.router.navigateByUrl('/plans/filter/results'); 
    });
   
  }

  viewDetailPlan():void{     
      this.router.navigateByUrl('/plan/detail');
  }

}
