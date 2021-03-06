import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from 'src/app/models/city.model';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-show-cities',
  templateUrl: './show-cities.component.html',
  styleUrls: ['./show-cities.component.css']
})
export class ShowCitiesComponent implements OnInit {

  cities$:Observable<City[]>;
  
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  this.cities$ = this.weatherService.getCities();
  }

}
