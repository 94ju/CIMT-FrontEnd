import { Component } from '@angular/core';
import { AuthService } from './components/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'frontendCIMT';
  constructor(private authService:AuthService){
    //this.islogedin=this.authService.islogedin;
    console.log("app com "+this.authService.islogedin)
  }
  islogedin(){
    console.log("app com is loged "+this.authService.islogedin)
    return this.authService.islogedin;
  }

  
}
