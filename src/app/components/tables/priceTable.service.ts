import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Product } from 'src/app/models/products.model';
import { ApiResponse } from 'src/app/models/api-response.model';

@Injectable({providedIn:"root"})
export class PriceTableService{
   
    private priceurl = "http://localhost:3000/api/vmdetails/"
    datasource;
    displayedColumns: string[] = ['Catergory', 'Machine Type', 'CPUs', 'Memory','Network','On-Demand-Price(Linux)','AVG.Spot Price'];
    constructor(private http:HttpClient){}
   
    getPrices():Observable<ApiResponse>{
        return this.http.get<ApiResponse>(this.priceurl);    
    }

    ngOnInit() {
    }
}