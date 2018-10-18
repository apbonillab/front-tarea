import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { PlanListComponent } from '../plan/plan-list/plan-list.component';
import { LandingComponent } from '../landing/landing.component';
import { PlanFilterResultComponent } from '../plan/plan-filter-result/plan-filter-result.component';
import { PlanDetailComponent } from '../plan/plan-detail/plan-detail.component';
import { LoginComponent } from '../login/login.component';



const routes: Routes = [
    {
        path: 'plans',
        children: [
            {
                path: 'list',
                component: PlanListComponent
                //   component: PlanListComponent , canActivate: [AuthGuard]  ejemplo de como permitir ver esta url solo cuando este logeado
            },
            {
                path: 'filter/results',
                component: PlanFilterResultComponent
            }
        ]
    },
    {
        path: '',
        component: LandingComponent
    },
    {
        path: 'plan/detail',
        component: PlanDetailComponent
    },
    { path: 'login', component: LoginComponent },
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
