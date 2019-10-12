import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router,private authsevice:AuthService) { }
  islogedIN;
  ngOnInit() {
  }
  login(){
    
    this.route.navigate(['home'])
    console.log("check")
  }
  onLogin(form: NgForm) {
    if(form.invalid){
      return;
    }
   
    this.authsevice.loginUser(form.value.email,form.value.password)
    this.islogedIN=this.authsevice.islogedin;
  }

}
