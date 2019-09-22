import {Injectable} from "@angular/core"
import { HttpClient } from "@angular/common/http";
import { Authdata } from './auth-data.model';
@Injectable({providedIn:"root"})
export class AuthService{
    islogedin=false;
    constructor(private http:HttpClient){}
    createUser(email:string,password:string,username:string,role:string){
        console.log("authservice")
        const authData:Authdata={
            email:email,
            username:username,
            password:password,
            role:role
        }
        console.log(authData)
        this.http.post("http://localhost:3000/api/users/register",authData)
            .subscribe(response=>{
                console.log(response);
            })

    }

}