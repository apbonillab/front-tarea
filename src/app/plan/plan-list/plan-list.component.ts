import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Plan} from '../../domain/plan';
import { PlanService } from '../plan.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.css']
})
export class PlanListComponent implements OnInit {

  constructor(private planService: PlanService, private sanitizer: DomSanitizer) { }

  plans: Plan[];
  imageUrl;

  getPlans(): void {
    this.planService.getPlans()
        .subscribe(plans => this.plans = plans);
  }


  ngOnInit() {
    this.getPlans();
  }

}

function getImageFromService(image:any): Promise<string> {
  return new Promise((OK, ERROR) => {
    let blob = new Blob([image.data],{
          type: 'image/jpeg'
        });
    var reader = new FileReader();
    let base64data;
    reader.readAsDataURL(blob); 
    reader.onloadend = function() {
        base64data = reader.result;   
        OK(base64data)           
 }
  });
}


