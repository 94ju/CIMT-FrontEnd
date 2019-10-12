import { Injectable } from '@angular/core';
import { Vmdata } from './vm-data.model';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({providedIn:"root"})
export class Vmservice{
    private vms:Vmdata[]=[]
    private vmUpdated=new Subject<Vmdata[]>();
    constructor(private http:HttpClient,private authService:AuthService){}

    vmCreate(ami:string,instanceType:string,numberOfInstances:string,storage:string,securityGroup:string){
        const vm:Vmdata={
            id:null,
            ami:ami,
            instanceType:instanceType,
            numberOfInstances:numberOfInstances,
            storage:storage,
            securityGroup:securityGroup
        }
        this.vms.push(vm);
        console.log(vm);
        console.log(this.authService.getTOken());
        
          this.http.post("http://localhost:3000/api/vms/createvm",vm).subscribe(res=>console.log(res))
    }

    getVM(){
        console.log('vm service')
        this.http.get<{message:string;vms:Vmdata[]}>('http://localhost:3000/api/vms/vmdata').subscribe(vmData=>{
            this.vms=vmData.vms;
            this.vmUpdated.next([...this.vms])  
            console.log(this.vms)
        }
                
        )
    
    }
    getVmUpdateListener() {
        return this.vmUpdated.asObservable();
      }

}