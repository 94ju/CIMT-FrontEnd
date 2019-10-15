import { Injectable } from '@angular/core';
import { Vmdata } from './vm-data.model';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';
import {environment} from '../../../environments/environment'

const BACKEND_URL=environment.apiUrl+"/vms/";

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
            securityGroup:securityGroup,
            InstanceId:null,
            PrivateIpAddress:null,
            creator:null
        }
        this.vms.push(vm);
        console.log(vm);
        console.log(this.authService.getTOken());
        
          this.http.post(BACKEND_URL+"/createvm",vm).subscribe(res=>console.log(res))
    }

    getVM(){
        console.log('vm service')
        this.http.get<{message:string;vms:any}>(BACKEND_URL+'/vmdata').
        pipe(map((vmData)=>{
            return vmData.vms.map(vm=>{
                console.log("c_id "+vm.creator)
                console.log("vm_id "+this.authService.getUserId())
                return{
                    id:vm._id,
                    ami:vm.ami,
                    instanceType:vm.instanceType,
                    numberOfInstances:vm.numberOfInstances,
                    securityGroup:vm.securityGroup,
                    storage:vm.storage,
                    InstanceId:vm.InstanceId,
                    PrivateIpAddress:vm.PrivateIpAddress,
                    creator:vm.creator
                };
            });
        }))
        .subscribe(vmData=>{

            this.vms=vmData;
            this.vmUpdated.next([...this.vms])  
            console.log("vmd data wiht id"+this.vms)
        }        
        )
    }
    getVmUpdateListener() {
        return this.vmUpdated.asObservable();
    }
    deleteVM(id:string,InstanceId:string){
        this.http.delete(BACKEND_URL+'/vmdata/',{params: {id: id,InstanceId:InstanceId}})
            .subscribe(()=>{
                const updatedVMS = this.vms.filter(vm => vm.id !== id);
                this.vms = updatedVMS;
                this.vmUpdated.next([...this.vms]);
            })
            
    }
    rebootVM(InstanceId:string){
        const vmId={InstanceId:InstanceId}
        console.log("reboot"+InstanceId)
        this.http.post(BACKEND_URL+'/reboot/',vmId)
            .subscribe(()=>{
                const updatedVMS = this.vms.filter(vm => vm.InstanceId !==InstanceId);
                this.vms = updatedVMS;
                this.vmUpdated.next([...this.vms]);
            })
            
    }

    stopVM(InstanceId:string){
        const vmId={InstanceId:InstanceId}
        console.log("reboot"+InstanceId)
        this.http.post(BACKEND_URL+'/stop/',vmId)
            .subscribe(()=>{
                const updatedVMS = this.vms.filter(vm => vm.InstanceId !==InstanceId);
                this.vms = updatedVMS;
                this.vmUpdated.next([...this.vms]);
            })
            
    }
    startVM(InstanceId:string){
        const vmId={InstanceId:InstanceId}
        console.log("reboot"+InstanceId)
        this.http.post(BACKEND_URL+'/start/',vmId)
            .subscribe(()=>{
                const updatedVMS = this.vms.filter(vm => vm.InstanceId !==InstanceId);
                this.vms = updatedVMS;
                this.vmUpdated.next([...this.vms]);
            })
            
    }

}