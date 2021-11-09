import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store, select } from '@ngrx/store';
import { City } from '../../app/models/city.model';
import { addWeather } from '../store/weather.actions';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private ApiKey: string = null;
  private baseUrl: string = `https://api.openweathermap.org/data/2.5/weather`;

  httpOptions = {
    headers: new HttpHeaders({ Accept: 'application/json' }),
  };

  constructor(
    private http: HttpClient,
    private store: Store<{ weather: City[] }>
  ) {
    this.ApiKey = environment.Api_Key;
  }

  addCity(city: string, units: string) {
    this.http
      .get(
        `
      ${this.baseUrl}?q=${city}&units=${units}&appid=${this.ApiKey}`,
        this.httpOptions
      )
      .subscribe((weather: City) => {
        const { name } = weather;
        const { description, icon } = weather.weather[0];
        const { temp } = weather.main;

        const city = {
          name,
          units,
          weather: { description, icon },
          main: { temp },
        };

        this.store.dispatch(addWeather({ city }));
      });
  }

  getCities() {
    return this.store.select('weather');
  }
}
