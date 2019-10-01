import {Injectable} from "@angular/core"
import { HttpClient } from "@angular/common/http";
import { Authdata } from './auth-data.model';
import { Subject } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';
@Injectable({providedIn:"root"})
export class AuthService{
    islogedin=false;
    private token:string;
    private userName:string;
    private authServiceListner=new Subject<boolean>();
    constructor(private http:HttpClient){}
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
        this.http.post<{token:string}>("http://localhost:3000/api/users/login",authData)
            .subscribe(response=>{
                const token =response.token;
                this.token=token
                this.islogedin=true;
                console.log(response)
            })
    } 
    logOut(){
        this.islogedin=false;
        this.authServiceListner.next(false);
        this.token=null;
    }  

}