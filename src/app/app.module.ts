import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { weatherReducer } from './store/weather.reducer';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AddCityComponent } from './comp/add-city/add-city.component';
import { ShowCitiesComponent } from './comp/show-cities/show-cities.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddCityComponent,
    ShowCitiesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ weather: weatherReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
