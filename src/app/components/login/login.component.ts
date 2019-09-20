import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  login(){
    this.route.navigate(['home'])
    console.log("check")
  }
  onLogin(form: NgForm) {
    console.log(form.value);
    this.route.navigate(['home']);
  }

}
