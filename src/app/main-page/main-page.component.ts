import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../services/weather.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  displayedColumns: string[] = ['date', 'temp', 'name', 'weight', 'symbol'];
  dataSource;

  constructor(public weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getWeather().subscribe(
      () => {
        this.dataSource = this.weatherService.weatherList;
      },
      error => {
        console.error('Weather error', error);
      }
    );
  }

}
