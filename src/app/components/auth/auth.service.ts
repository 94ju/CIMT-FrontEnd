import {Injectable} from "@angular/core"
import { HttpClient } from "@angular/common/http";
import { Authdata } from './auth-data.model';
@Injectable({providedIn:"root"})
export class AuthService{
    islogedin=false;
    private token:string;
    private userName:string;
    constructor(private http:HttpClient){}
    getTOken(){
        return this.token;
    }
    getUserName(){
        return this.userName;
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
                //console.log(response);
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
        this.http.post("http://localhost:3000/api/users/login",authData)
            .subscribe(response=>{
                console.log(response)
            })
    }   

}