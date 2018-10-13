import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing-module/app-routing.module';
import { PlanModule } from './plan/plan.module';
import { LandingComponent } from './landing/landing.component';
import { Router, RouterOutlet,RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    FooterComponent
  ],
  //schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PlanModule,
    RouterModule,
    FormsModule,
    NgxPaginationModule    
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
