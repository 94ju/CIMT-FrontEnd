import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpErrorResponse
  } from "@angular/common/http";
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ErrorComponent } from './error/error.component';
 
  
  @Injectable()
  export class ErrorInterceptor implements HttpInterceptor {
 
    constructor(private diolog:MatDialog){}
    intercept(req: HttpRequest<any>, next: HttpHandler) {
     
      return next.handle(req).pipe(
          catchError((error:HttpErrorResponse)=>{
              let errormessage ="An unkown Error occured!"
              console.log(error.error.message)
              if(error.error.message){
                  errormessage=error.error.message;
              }
              this.diolog.open(ErrorComponent,{data:{message:errormessage}})
              return throwError(error)
          })
      );
    }
  }