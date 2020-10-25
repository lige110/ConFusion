import { Injectable } from '@angular/core';
import { Promotion} from '../shared/promotion'
import {PROMOTIONS} from '../shared/promotions'
import { of, Observable } from 'rxjs'
import { from } from 'rxjs';
import { catchError, delay} from 'rxjs/operators';
import { ProcessHttpMsgService } from './process-http-msg.service';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(
    private processHTTPMsgService:ProcessHttpMsgService,
  ) { }


  getPromotions(): Observable< Promotion[]> {
    return of(PROMOTIONS).pipe(delay(2000))
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getPromotion(id: string): Observable<Promotion> {
    return of(PROMOTIONS.filter((promo) => (promo.id === id))[0])
    .pipe(delay(1000))
    .pipe(catchError(this.processHTTPMsgService.handleError));;
  }

  getFeaturedPromotion(): Observable<Promotion> {
    return of(PROMOTIONS.filter((promotion) => promotion.featured)[0])
    .pipe(delay(1000))
    .pipe(catchError(this.processHTTPMsgService.handleError));;
  }
}
