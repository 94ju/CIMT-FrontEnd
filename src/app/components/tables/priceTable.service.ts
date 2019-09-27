import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({providedIn:"root"})
export class PriceTableService{
   
    private priceurl = "http://localhost:3000/api/vmdetails/"
    
    
    constructor(private http:HttpClient){}
   
    getPrices(){
            this.http.get(this.priceurl).subscribe(result=>{
            console.log(result);
            return(result);
        })
     }
    ngOnInit() {
    }
}