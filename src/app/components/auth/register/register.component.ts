import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  Roles: any = ['Admin', 'Developer'];
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
  }

}
