import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  Roles: any = ['Admin', 'Developer'];
  constructor() { }
  onRegister(form:NgForm){
    console.log(form.value)
  }
  ngOnInit() {
  }

}
