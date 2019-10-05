import { Injectable } from '@angular/core';
import { Vmdata } from './vm-data.model';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

@Injectable({providedIn:"root"})
export class Vmservice{

    constructor(private http:HttpClient,private authService:AuthService){}

    vmCreate(ami:string,instanceType:string,numberOfInstances:string,storage:string,securityGroup:string){
        const vm:Vmdata={
            ami:ami,
            instanceType:instanceType,
            numberOfInstances:numberOfInstances,
            storage:storage,
            securityGroup:securityGroup
        }
        console.log(vm);
        console.log(this.authService.getTOken());
        
         this.http.post("http://localhost:3000/api/vms/createvm",vm).subscribe(res=>console.log(res))
    }

}