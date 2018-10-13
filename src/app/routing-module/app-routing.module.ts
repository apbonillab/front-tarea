import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { PlanListComponent } from '../plan/plan-list/plan-list.component';
import { LandingComponent } from '../landing/landing.component';
import { PlanFilterResultComponent } from '../plan/plan-filter-result/plan-filter-result.component';
import { PlanDetailComponent } from '../plan/plan-detail/plan-detail.component';



const routes: Routes = [
    {
        path: 'plans',
        children: [
            {
                path: 'list',
                component: PlanListComponent
            },
            {
                path:'filter/results',
                component: PlanFilterResultComponent
            }
            

        ]
    },
    {
        path: '',
        component: LandingComponent
        
    },
    {
        path:'plan/detail',
        component: PlanDetailComponent
    }
    
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}
