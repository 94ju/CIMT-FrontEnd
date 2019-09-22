import {Injectable} from "@angular/core"
import { HttpClient } from "@angular/common/http";
@Injectable({providedIn:"root"})
export class AuthService{
    islogedin=false;
    constructor(private http:HttpClient){}

}