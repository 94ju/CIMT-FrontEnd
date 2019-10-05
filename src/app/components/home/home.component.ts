import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  panelOpenState = false;
  username;
  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.username=this.authService.getUserName();
    console.log(this.username);
  }
  onLogOut(){
    this.authService.logOut();
    
  }

}
