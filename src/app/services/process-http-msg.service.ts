import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProcessHttpMsgService {

  constructor() { }

  public handleError(errorResponse: HttpErrorResponse | any){
    let errMsg:string;

    if(errorResponse.error instanceof ErrorEvent){
      errMsg = errorResponse.error.message;
      console.log("error event");
    } else{
      console.log("not error event");
      console.log(errorResponse);
      errMsg = `${errorResponse.status} - ${errorResponse.statusText || ''} ${errorResponse.error}`;
    }

    return throwError(errMsg);
  }
}
