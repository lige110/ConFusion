import { Component, OnInit, Inject } from '@angular/core';
import { Params, ActivatedRoute} from '@angular/router';
import { Location} from '@angular/common';
import { Dish } from '../shared/dish';

import{ DishService} from '../services/dish.service';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss']
})
export class DishDetailComponent implements OnInit {

dish:Dish;
dishIds: string[];
prev:string;
next:string;
errmsg: string;

  constructor(
    private dishService: DishService,
    private route: ActivatedRoute,
    private location:Location,
    @Inject('BaseURL') private BaseURL
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      console.log(`Current item is ${params.get("id")}`);
    });
    this.dishService.getDishIds()
    .subscribe(
      (dishIds) => this.dishIds = dishIds,
      errmsg=>this.errmsg=errmsg);

    this.route.params.pipe(switchMap((params:Params)=>this.dishService.getDish(params['id'])))
    .subscribe((DISH)=>{this.dish = DISH; console.log(DISH.id,"???"); this.setPrevNext(DISH.id);})
  }



  setPrevNext(dishId:string){
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index -1)%this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index +1)%this.dishIds.length];
    console.log("prev", this.prev);
    console.log("next",this.next)
  }

  goBack(): void{
    this.location.back();
  }

}
