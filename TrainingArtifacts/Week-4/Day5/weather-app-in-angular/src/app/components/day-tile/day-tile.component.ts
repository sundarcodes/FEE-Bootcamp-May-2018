import { WeatherService } from './../../weather.service';
import { IDayTile } from './../../models/dayTile';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-day-tile',
  templateUrl: './day-tile.component.html',
  styleUrls: ['./day-tile.component.css']
})
export class DayTileComponent implements OnInit {

  @Input() dayTileInfo: IDayTile;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

  onTileClick() {
    this.weatherService.updateDayInfoFor(this.dayTileInfo.dayNum);
  }

}
