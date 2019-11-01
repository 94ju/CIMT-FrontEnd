import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Product } from 'src/app/models/products.model';
import { ApiResponse } from 'src/app/models/api-response.model';
import { environment } from 'src/environments/environment';
const BACKEND_URL=environment.apiUrl
@Injectable({providedIn:"root"})
export class PriceTableService{
   
    private priceurl ;
    datasource;
    displayedColumns: string[] = ['Catergory', 'Machine Type', 'CPUs', 'Memory','Network','On-Demand-Price(Linux)','AVG.Spot Price'];
    constructor(private http:HttpClient){}
   
    getPrices(computetype):Observable<any>{
        console.log(computetype)
        this.priceurl = BACKEND_URL+"/vmdetails/"+computetype
        return this.http.get<{product:any}>(this.priceurl);    
    }

    ngOnInit() {
    }
}