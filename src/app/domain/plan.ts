import { City } from '../domain/city';
import { PlanType } from '../domain/planType';
import { Languague } from '../domain/languague';
import { Provider } from '../domain/provider';
/**
* This class represents a book of the BookStore. 
* It contains all the information relevant to the book.
*/
export class Plan {
    /**
    * El  id del plan
    */
   id: number;
    /**
    * El  nombre del plan
    */
    name: string;
    /**
    * La descripcion del plan
    */
    description: string;
    /**
    * El costo del plan
    */
    value: number;
    /**
    * La ciudad donde se lleva a cabo el plan
    */
    city: City;
/*
     /**
    * El tipo de plan
    */
   planType: PlanType;

   /**
    /**
    * El lenguaje del plan
    */
   languague: Languague;
   /**
    * El proveedor del plan
    */
   provider: Provider;

   /**
    * Numero de personas incluidas en el plan
    */
   numPersons: number;

    /**
    * Numero de dias que involucra al plan
    */
   numDays: number;
    /**
    * Imagen que identifica al plan
    */
   image: string;

}
