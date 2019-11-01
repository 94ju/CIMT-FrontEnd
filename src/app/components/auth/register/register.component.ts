import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit,OnDestroy {
  Roles: any = ['Admin', 'Developer'];
  private authServiceSub:Subscription;
  constructor(private authservice:AuthService) { }
  onRegister(form:NgForm){
    console.log("check")
    console.log(form.invalid)
    if(form.invalid){
      return;
    }
    this.authservice.createUser(form.value.email,form.value.password,form.value.username,form.value.role)
    console.log(form.value)
    console.log("check")
  }
  ngOnInit() {
    this.authServiceSub=this.authservice.getAuthStatusListener().subscribe();
  }
  ngOnDestroy(){
    this.authServiceSub.unsubscribe();
  }
}
