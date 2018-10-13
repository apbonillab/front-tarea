import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Plan } from '../domain/plan';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Country } from "src/app/domain/country";
import { PlanType } from "src/app/domain/planType";
import { HttpParams } from "@angular/common/http";
import { City } from "src/app/domain/city";

const API_URL = environment.apiURL;
const RESOURCE_COUNTRIES = "cities/country/"

@Injectable()
export class CitiesService {

    cities:City[];
    constructor(private http: HttpClient) { }

    getCityByCountry(country): Observable<City[]> {
        return this.http.get<City[]>(API_URL+RESOURCE_COUNTRIES+country);
    }
    

   
}
