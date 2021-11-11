import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { dataChangeFadeIn, fadeIn } from '../../animations/animation';

@Component({
  selector: 'app-show-cities',
  templateUrl: './show-cities.component.html',
  styleUrls: ['./show-cities.component.css'],
  animations: [fadeIn, dataChangeFadeIn],
})
export class ShowCitiesComponent implements OnInit {
  cities: any[];
  dataState: 'entering' | 'done' = 'done';

  constructor(
    private weatherService: WeatherService,
    private cdref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.weatherService.getCities().subscribe((cities) => {
      this.cities = cities;
      this.dataState = 'entering';
      this.cdref.detectChanges();
    });
  }
}
