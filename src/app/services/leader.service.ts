import { Injectable,Inject } from '@angular/core';
import { Leader} from '../shared/leader'
import { LEADERS} from '../shared/leaders'
import { of, Observable } from 'rxjs'
import { from } from 'rxjs';
import { catchError, delay} from 'rxjs/operators';
import { HomeComponent} from '../home/home.component'
import { ProcessHttpMsgService } from './process-http-msg.service';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {
  

  constructor(
    private processHTTPMsgService:ProcessHttpMsgService,
   ) { }

  getLeaders(): Observable< Leader[]>{

    return of( LEADERS).pipe(delay(1000))
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getFeaturedLeader(): Observable<Leader >{
    return of(LEADERS.filter((leader) => leader.featured)[0])
    .pipe(delay(1000))
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
