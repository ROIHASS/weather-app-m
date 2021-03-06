import { Component, OnInit } from '@angular/core';
import { City } from './models/city.model';
import { WeatherService } from './services/weather.service';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger(
      'enterAnimation', [
      transition(':enter', [
        style({  opacity: 0 }),
        animate('500ms', style({  opacity: 1 }))
      ]),
      transition(':leave', [
        style({  }),
        animate('500ms', style({  opacity: 0 }))
      ])
    ]
    )
  ],
})
export class AppComponent implements OnInit {
  title = 'weather-app';
  cities: City[] = [];

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getCities().subscribe(cities => {
      this.cities = cities;
    });
  }
}
