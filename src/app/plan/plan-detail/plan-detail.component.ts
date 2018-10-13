import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Booking } from '../../domain/booking';
import { PlanService } from 'src/app/plan/plan.service';
import { Plan } from 'src/app/domain/plan';
import swal from 'sweetalert';


@Component({
  selector: 'app-plan-detail',
  templateUrl: './plan-detail.component.html',
  styleUrls: ['./plan-detail.component.css']
})
export class PlanDetailComponent implements OnInit {

  plan:Plan;
  booking:Booking;
  constructor(private planService: PlanService,
    private router:Router
    ) { }

  ngOnInit() {
    this.plan=this.planService.getSelectedPlan();
    this.booking= new Booking();
  }

  saveBooking(){
    this.booking.numDias=this.plan.numDays.toString();
    this.booking.numPersonas = this.plan.numPersons.toString();
    this.booking.planId = this.plan.id.toString();
    this.planService.saveBooking(this.booking).subscribe(response=>{
      swal("Reserva Exitosa!", "Pronto nos comunicaremos contigo!", "success");
    },error=>{

      swal("upss!", "Intenta de nuevo!", "error");    })
  }
}
