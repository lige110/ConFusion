import { Component, Inject, OnInit } from '@angular/core';
import { LeaderService } from '../services/leader.service';
import { Leader } from '../shared/leader';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  leaders: Leader[];
  errMsg: string;

  constructor(
    private leaderService:LeaderService,
    @Inject('BaseURL') private BaseURL,
    ) { }

  ngOnInit(): void {
    this.leaderService.getLeaders()
    .subscribe(
      (leaders)=>  this.leaders =leaders,
      errmsg=>this.errMsg = errmsg);
  }

}
