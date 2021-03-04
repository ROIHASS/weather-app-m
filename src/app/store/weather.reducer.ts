import { createReducer, on } from '@ngrx/store';
import { City } from '../models/city.model';
import { addWeather } from './weather.actions';


export const initialState: City[] = [];

const _weatherReducer = createReducer(initialState,
    on(addWeather, (state, { city }) => {
        return [...state, city];
    })
);

export function weatherReducer(state, action) {
    return _weatherReducer(state, action);
}