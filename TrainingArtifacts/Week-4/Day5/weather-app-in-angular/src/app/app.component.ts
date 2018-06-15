import { WeatherService } from './weather.service';
import { ISummary } from './models/summary';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // httpService: Http;
  // constructor(httpService: Http) {
  //   this.httpService = httpService;
  // }

  city: string;
  constructor(public weatherService: WeatherService) {
  }

  onButtonClick(cityName: string) {
    console.log(cityName);
    this.weatherService.fetchWeatherInfo(cityName);
    // console.log(this.city);

  }

}
