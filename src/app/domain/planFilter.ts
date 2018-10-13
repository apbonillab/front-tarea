export class PlanFilter {

    constructor(typePlan:string,numPersons:Number,country:string,city:string,numDays:string,nameCity:string,namePlanType:string){
        this.typePlan=typePlan;
        this.numPersons=numPersons;
        this.numDays =numDays;
        this.country=country;
        this.city=city;
        this.nameCity=nameCity;
        this.namePlanType=name;
    }
    typePlan:string;
    numPersons:Number;
    country:string;
    city:string;
    numDays:string;
    nameCity:string;
    namePlanType:string;
}