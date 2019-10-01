import {Injectable} from "@angular/core"
import { HttpClient } from "@angular/common/http";
import { Authdata } from './auth-data.model';
import { Subject } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';
import { Router } from '@angular/router';
@Injectable({providedIn:"root"})
export class AuthService{
    islogedin=false;
    private token:string;
    private userName:string;
    private tokenTImer:any;
    private authServiceListner=new Subject<boolean>();
    constructor(private route:Router,private http:HttpClient){}
    getTOken(){
        return this.token;
    }
    getIsAuthenticated(){
        return this.islogedin;
    }
    getUserName(){
        return this.userName;
    }
    getAuthStatusListner(){
        return this.authServiceListner.asObservable();
    }
    createUser(email:string,password:string,username:string,role:string){
        console.log("authservice")
        const authData:Authdata={
            email:email,
            username:username,
            password:password,
            role:role
        }
        console.log(authData)
        this.http.post<{token:string}>("http://localhost:3000/api/users/register",authData)
            .subscribe(response=>{
                const token =response.token;
                this.token=token;
                this.authServiceListner.next(true)
            })

    }

    loginUser(email:string,password:string){
        const authData:Authdata={
            email:email,
            username:null,
            password:password,
            role:null
        }
        this.userName=email;
        this.http.post<{token:string,expiresIn:number}>("http://localhost:3000/api/users/login",authData)
            .subscribe(response=>{
                const token =response.token;
                const expiresInDuration= response.expiresIn;
                this.setAuthTimer(expiresInDuration)
                this.token=token
                this.islogedin=true;
                const now = new Date();
                const expirationDate= new Date(now.getTime() +expiresInDuration*1000 )
                console.log(expirationDate);
                
                this.saveAuthData(token,expirationDate)
                console.log(response)
            })
    } 
    autoAuthUser(){
        const authInformation=this.getAuthData();
        if (!authInformation) {
            return;
          }
        const currentDate=new Date();
        const expiresIN =authInformation.expirationDate.getTime()-currentDate.getTime();
        if(expiresIN){
            this.token=authInformation.token;
            this.islogedin=true;
            this.setAuthTimer(expiresIN/1000)
            this.authServiceListner.next(true);
        }
    }
    logOut(){
        this.islogedin=false;
        this.authServiceListner.next(false);
        clearTimeout(this.tokenTImer);
        this.token=null;
        this.clearAuthData();
        this.route.navigate(['header/login']);
    }  
    private saveAuthData(token:string,expirationDate:Date){
        localStorage.setItem('token',token);
        localStorage.setItem('expiration',expirationDate.toISOString())
    }
    private clearAuthData(){
        localStorage.removeItem('token'),
        localStorage.removeItem('expiration')
    }
    private getAuthData(){
        const token=localStorage.getItem('token');
        const expirationDate =localStorage.getItem('expiration')
        if(!token || !expirationDate){
            return;
        }
        else{
            return{
                token:token,
                expirationDate:new Date(expirationDate)
            }
        }

    }
    private setAuthTimer(duration:number){
        this.tokenTImer=setTimeout(()=>{
            this.logOut();
        },duration*1000)
    }
}