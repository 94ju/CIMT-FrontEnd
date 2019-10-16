import {Injectable} from "@angular/core"
import { HttpClient } from "@angular/common/http";
import { Authdata } from './auth-data.model';
import { Subject } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

const BACKEND_URL=environment.apiUrl+"/users";

@Injectable({providedIn:"root"})
export class AuthService{
    private isAuthenticated = false;
    private token:string;
    private userName:string;
    private tokenTImer:any;
    private userId:string;
    private authStatusListener = new Subject<boolean>();
    constructor(private route:Router,private http:HttpClient){}
    getTOken(){
        return this.token;
    }
    getIsAuth() {
        return this.isAuthenticated;
    }
    getUserId(){
        return this.userId;
    }
    getUserName(){
        return this.userName;
    }
    getAuthStatusListener(){
        return this.authStatusListener.asObservable();
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
        this.http.post<{token:string}>(BACKEND_URL+"/register",authData)
            .subscribe(response=>{
                const token =response.token;
                this.token=token;
                this.authStatusListener.next(true)
                this.route.navigate(['header/login']);
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
        this.http.post<{token:string,expiresIn:number,userId: string,userName:string}>(BACKEND_URL+"/login",authData)
            .subscribe(response=>{
                this.userId=response.userId;
                this.userName=response.userName;
                const token =response.token;
                this.authStatusListener.next(true)
                const expiresInDuration= response.expiresIn;
                this.setAuthTimer(expiresInDuration)
                this.token=token
                this.isAuthenticated=true;
                const now = new Date();
                const expirationDate= new Date(now.getTime() +expiresInDuration*1000 )
                console.log(expirationDate);
                
                this.saveAuthData(token,expirationDate,this.userId,this.userName)
                console.log(response)
                this.route.navigate(['home/aws']);
            })
    } 
    autoAuthUser(){
        const authInformation=this.getAuthData();
        console.log("from auto auth"+authInformation.token)
        console.log("from auto auth"+authInformation.expirationDate)
        if (!authInformation) {
            return;
          }
        const currentDate=new Date();
        const expiresIN =authInformation.expirationDate.getTime()-currentDate.getTime();
        if(expiresIN > 0){
            this.token=authInformation.token;
            this.isAuthenticated=true;
            this.userId = authInformation.userID;
            this.userName=authInformation.userName;
            this.setAuthTimer(expiresIN/1000)
            this.authStatusListener.next(true);
        }
    }
    logOut(){
        this.isAuthenticated=false;
        this.authStatusListener.next(false);
        clearTimeout(this.tokenTImer);
        this.token=null;
        this.clearAuthData();
        this.route.navigate(['header/login']);
    }  
    private saveAuthData(token:string,expirationDate:Date,userId: string,userName: string){
        localStorage.setItem('token',token);
        localStorage.setItem('expiration',expirationDate.toISOString());
        localStorage.setItem("userId", userId);
        localStorage.setItem("userName", userName);
    }
    private clearAuthData(){
        localStorage.removeItem('token'),
        localStorage.removeItem('expiration')
        localStorage.removeItem("userId");
        localStorage.removeItem("userName");
    }
    private getAuthData(){
        const token=localStorage.getItem('token');
        const expirationDate =localStorage.getItem('expiration');
        const userId = localStorage.getItem("userId");
        const userName = localStorage.getItem("userName");
        if(!token || !expirationDate){
            return;
        }
        else{
            return{
                token:token,
                expirationDate:new Date(expirationDate),
                userID:userId,
                userName:userName
            }
        }

    }
    private setAuthTimer(duration:number){
        this.tokenTImer=setTimeout(()=>{
            this.logOut();
        },duration*1000)
    }
}