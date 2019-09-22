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

  ngOnInit() {
  }
  login(){
    
    this.route.navigate(['home'])
    console.log("check")
  }
  onLogin(form: NgForm) {
    this.authsevice.islogedin=true;
    console.log(form.value);
    this.route.navigate(['home']);
    // console.log("Login com "+this.authsevice.islogedin)
  }

}
