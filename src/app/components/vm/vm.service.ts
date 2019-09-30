import { Injectable } from '@angular/core';
import { Vmdata } from './vm-data.model';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn:"root"})
export class Vmservice{

    constructor(private http:HttpClient){}

    vmCreate(ami:string,instanceType:string,numberOfInstances:string,storage:string,securityGroup:string;){
        const vm:Vmdata={
            ami:ami,
            instanceType:instanceType,
            numberOfInstances:numberOfInstances,
            storage:storage,
            securityGroup:securityGroup
        }

        this.http.post("",vm)
    }

}