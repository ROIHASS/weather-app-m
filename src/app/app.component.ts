import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { City } from './models/city.model';
import { WeatherService } from './services/weather.service';
import { dataChange, fadeIn } from './animations/animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeIn, dataChange],
})
  
export class AppComponent implements OnInit {
  title = 'weather-app';
  cities: City[] = [];

  constructor(private weatherService: WeatherService, private cdref: ChangeDetectorRef ) {}

  ngOnInit() {
    this.weatherService.getCities().subscribe((cities) => {
      this.cities = cities;
      this.dataState = 'entering';
      this.cdref.detectChanges();
    });
  }

  dataState: 'entering' | 'done' = 'done';

}
