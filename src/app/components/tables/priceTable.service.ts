import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({providedIn:"root"})
export class PriceTableService{
   
    private priceurl = "http://localhost:3000/api/vmdetails/"
    datasource;
    displayedColumns: string[] = ['Catergory', 'Machine Type', 'CPUs', 'Memory','Network','On-Demand-Price(Linux)','AVG.Spot Price'];
    constructor(private http:HttpClient){}
   
    getPrices(){
            this.http.get<{products:string}>(this.priceurl).
            // pipe(
            //     map(data=>
                   
            //     )
            // ).
            subscribe(result=>{
            this.datasource=result.products[0];
            console.log(this.datasource);
            console.log(this.datasource.category);
            console.log(this.datasource.type);
            console.log(this.datasource.onDemandPrice);
            return(result);
        })
     }
    ngOnInit() {
        // this.http.get(this.priceurl).subscribe(result=>{
        //     this.datasource=result;
        //     console.log(result);
        //     return(result);
        // })
    }
}