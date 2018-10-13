import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Plan } from '../domain/plan';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Country } from "src/app/domain/country";
import { PlanType } from "src/app/domain/planType";
import { HttpParams } from "@angular/common/http";
import { PlanFilter } from '../domain/planFilter';

const API_URL = environment.apiURL;
const RESOURCE_COUNTRIES = "plans/countries"
const RESOURCE_ALL = "plans/all"
const RESOURCE_PLAN_TYPE = "plans/type"
const RESOURCE_PLAN_CUSTOM = "plans/custom"
const RESOURCE_BOOKING= "plans/reserva"
/**
 * Servicio para proporcionar todo sobre los planes.
 **/
@Injectable()
export class PlanService {
    listCustom:any;
    planFilter:PlanFilter;
    header: HttpHeaders;



    private selectedPlan:Plan;
    /**
     * Constructor del servicio
     * @param http The HttpClient - This is necessary in order to perform requests
     */
    constructor(private http: HttpClient) { }

    /**
     * Devuelve un objeto de tipo Observable que contiene la lista de planes recibidos de la API.
     * @returns Lista de planes en tiempo real.
     */
    getPlans(): Observable<Plan[]> {
        return this.http.get<Plan[]>(API_URL+RESOURCE_ALL);
    }

    getCountries(): Observable<Country[]> {
        return this.http.get<Country[]>(API_URL+RESOURCE_COUNTRIES);
    }
    getPlansType(): Observable<PlanType[]> {
        return this.http.get<PlanType[]>(API_URL+RESOURCE_PLAN_TYPE);
    }

    getPlansCustom(data): Observable<Plan[]> {
        this.planFilter = data;
        let params = new HttpParams().set("plan_type",data.typePlan).set("city", data.city).set("num_days", data.numDays).set("num_persons", data.numPersons);
        
        return this.http.get<Plan[]>(API_URL+RESOURCE_PLAN_CUSTOM,{params: params});
      
    }

    saveBooking(data):Observable<any>{
       let params = new HttpParams().
        set("plan",data.planId).
        set("numpersonas", data.numPersonas).
        set("numdias", data.numDias).
        set("guiaid", "1").
        set("costo","123000").
        set("nombre",data.name).
        set("apellido",data.lastName).
        set("email",data.email).
        set("phone",data.phone);
        this.header = new HttpHeaders();

        this.header.set('Content-Type', 'application/json');
        this.header.set('Accept', 'application/json');
        const datas =  {
            "plan":data.planId,
            "numpersonas": data.numPersonas,
            "numdias": data.numDias,
            "guiaid": "1",
            "costo":  "123000",
            "nombre":data.name,
            "apellido":data.lastName,
            "email":data.email,
            "phone":data.phone
             
        };

        
        return this.http.post<any>(API_URL+RESOURCE_BOOKING, datas, { headers: this.header });
    }

    savePlanCustom(plan:Plan[]):void{
        this.listCustom=plan;
    }

    getPlanCustom():Plan[]{
        return this.listCustom;
    }

    getPlanFilter():PlanFilter{
        return  this.planFilter;
    }

    setSelectedPlan(plan:Plan):void{
        this.selectedPlan=plan;
    }

    getSelectedPlan():Plan{
        return this.selectedPlan;
    }


   
}
