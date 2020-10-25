import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  public weather;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    // this.http.get<JSON>('http://api.openweathermap.org/data/2.5/weather?id=2907911&appid=a3df158434ba8e1fe361c25ea590d369')
    this.http.get<JSON>('http://api.openweathermap.org/data/2.5/forecast?q=München,DE&lang=zh_cn&appid=a3df158434ba8e1fe361c25ea590d369')
    .subscribe(weather=>{
      this.weather=weather;
      console.log(JSON.stringify(weather))
    });
  }

}
