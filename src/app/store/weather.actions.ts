import { createAction, props } from '@ngrx/store';
import { City } from '../models/city.model';





export const addWeather = createAction('Add_Weather', props<{ city: City }>());