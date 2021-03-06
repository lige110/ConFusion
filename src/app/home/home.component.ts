import { Component, Inject, OnInit } from '@angular/core';
import { Dish } from '../shared/dish'
import { DishService } from "../services/dish.service";
import { Promotion } from "../shared/promotion";
import { PromotionService } from "../services/promotion.service";
import { Leader} from '../shared/leader'
import { LeaderService } from '../services/leader.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dish:Dish;
  promotion:Promotion;
  leader:Leader;
  dishErrMsg: string;
  proErrMsg:string;
  leaderErrMsg:string;


  constructor(private dishService: DishService,
    private promotionService: PromotionService,
    private leaderService: LeaderService,
    @Inject('BaseURL') private BaseURL,
    ) { }

  ngOnInit(): void {
    this.dishService.getFeaturedDish()
    .subscribe(
      (dish) =>this.dish = dish,
      errmsg=>{
        this.dishErrMsg =errmsg;
        console.log(JSON.stringify( errmsg));
      });

    this.promotionService.getFeaturedPromotion()
    .subscribe(
      (promotion)=> this.promotion = promotion,
      errmsg=>this.proErrMsg =errmsg);

    this.leaderService.getFeaturedLeader()
    .subscribe(
      (leader)=> this.leader =leader,
      errmsg=>this.leaderErrMsg =errmsg);
  }

}
