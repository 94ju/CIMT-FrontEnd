import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { Vmservice } from '../vm/vm.service';
import { Vmdata } from '../vm/vm-data.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  panelOpenState = false;
  username;
  private vmsSub: Subscription;

  constructor(private authService:AuthService,private vmService:Vmservice) { }
  vms:Vmdata[]=[]
  ngOnInit() {
    this.username=this.authService.getUserName();
    console.log(this.username);
    this.vmService.getVM();
    this.vmsSub=this.vmService.getVmUpdateListener()
      .subscribe((vm:Vmdata[])=>{
        this.vms=vm;
        console.log("check"+this.vms)
      })
  }
  onLogOut(){
    this.authService.logOut();
  }
  onStop(InstanceId:string){
    console.log("stop");
    this.vmService.stopVM(InstanceId)
  }
  onTerminate(id:string,InstanceId:string){
    console.log(id)
    this.vmService.deleteVM(id,InstanceId);
  }
  onReboot(InstanceId:string){
    this.vmService.rebootVM(InstanceId)
  }
  onStart(InstanceId:string){
    this.vmService.startVM(InstanceId)
  }

}
