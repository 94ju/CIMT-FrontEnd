import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {
  userAuthenticated=false;
  private authListner : Subscription;
  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.authListner = this.authService.getAuthStatusListner()
    .subscribe(isAuthenticated =>{
      this.userAuthenticated=true;
      this.userAuthenticated=isAuthenticated;
    })
  }
  
  ngOnDestroy(){
    this.authListner.unsubscribe();
  }

}
