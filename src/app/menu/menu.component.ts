import { Component, OnInit, Inject } from '@angular/core';
import { Dish} from '../shared/dish'
import { DishService} from '../services/dish.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes: Dish[];
  errMsg: string;
  // selectedDish:Dish;

  constructor(
    private dishService: DishService,
    @Inject('BaseURL') private BaseURL,
    private route:ActivatedRoute
    ) {  }

  ngOnInit(): void {
    this.dishService.getDishes()
    .subscribe((dishes) => this.dishes =dishes,
     errmsg=>this.errMsg=errmsg);
    
  } 

  // onSelect(dish:Dish){
  //   this.selectedDish = dish;
  // }

}
