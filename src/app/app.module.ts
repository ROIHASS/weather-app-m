import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { weatherReducer } from './store/weather.reducer';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({weather: weatherReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
