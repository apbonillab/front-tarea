import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanService } from './plan.service';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../routing-module/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PlanListComponent } from './plan-list/plan-list.component';
import { PlanFilterResultComponent } from './plan-filter-result/plan-filter-result.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PlanDetailComponent } from './plan-detail/plan-detail.component';



@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  declarations: [PlanListComponent, PlanFilterResultComponent, PlanDetailComponent],
  
  providers: [PlanService],
  bootstrap: [PlanListComponent],
  exports: [
    PlanListComponent
]
})
export class PlanModule { }
