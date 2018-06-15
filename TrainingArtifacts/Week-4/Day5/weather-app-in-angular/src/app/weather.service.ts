import { ISummary } from './models/summary';
import { IDayTile } from './models/dayTile';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import * as _ from 'lodash';
import * as moment from 'moment';

@Injectable()
export class WeatherService {
  summary: ISummary;
  dayWiseMap: any;
  dayTileList: Array<IDayTile>;
  constructor(private httpService: Http) {
    this.dayWiseMap = {};
  }

  updateDayInfoFor(dayNum: number) {
    // Get the day
    // Lookup in the day wise map for the dayNum
    // Update summary
    const dayInfoForDay = this.dayWiseMap[dayNum];
    console.log(dayInfoForDay);
    this.summary = {
      ...this.summary,
      day: moment(dayInfoForDay[0].dt * 1000).format("dddd"),
      weatherCondition: dayInfoForDay[0].weather[0].description
    }
  }

  fetchWeatherInfo(cityName: string) {
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=27d43832d2a4adcb97fcbfa23db130aa`;
    this.httpService.get(url)
      .subscribe((rsp) => {
        console.log(rsp.json());
        const data = rsp.json();
        this.summary = {
          cityName: data.city.name,
          day: moment(data.list[0].dt * 1000).format("dddd"),
          weatherCondition: data.list[0].weather[0].description
        };
        // Build day wise map
        data.list.forEach(date => {
          // console.log(date);
          const dateValue = new Date(date.dt * 1000);
          const dayNum = dateValue.getDay();
          if (dayNum in this.dayWiseMap) {
            this.dayWiseMap[dayNum].push(date);
          } else {
            this.dayWiseMap[dayNum] = [date];
          }
        });
        console.log(this.dayWiseMap);

        const sortedMap = _.sortBy(this.dayWiseMap, (value) => {
          let dayOfWeek = new Date(value[0].dt * 1000).getDay();
          let today = new Date().getDay();
          const diff = dayOfWeek - today;
          return diff < 0 ? diff + 7 : diff;
        });

        console.log(sortedMap);

        this.dayTileList = _.map(sortedMap, (obj) => {
          const minTemp = _.reduce(obj.map(interval => interval.main.temp_min), (a, b) => a + b) / obj.length;
          return {
            day: moment(obj[0].dt * 1000).format("ddd"),
            minTemp: _.round(minTemp - 270, 2),
            maxTemp: _.round(obj[0].main.temp_max - 270, 2),
            imageURL: 'assets/images/cloudy.png',
            dayNum: new Date(obj[0].dt * 1000).getDay()
          }
        });
        console.log(this.dayTileList);
      });
    // Build data structure for the tiles

  }

}
