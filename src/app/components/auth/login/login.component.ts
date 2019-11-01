import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {
  isLoading = false;
  private authServiceSub:Subscription;
  constructor(private route:Router,private authsevice:AuthService) { }
  islogedIN;
  ngOnInit() {
    this.authServiceSub=this.authsevice.getAuthStatusListener().subscribe();
  }
  ngOnDestroy(){
    this.authServiceSub.unsubscribe();
  }
  
  onLogin(form: NgForm) {
    if(form.invalid){
      return;
    }
    this.authsevice.loginUser(form.value.email,form.value.password)
    this.islogedIN=this.authsevice.getIsAuth();
  }

}
