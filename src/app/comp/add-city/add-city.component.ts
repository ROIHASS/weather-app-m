import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomValidationService } from 'src/app/services/custom-validation.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.css'],
})
export class AddCityComponent {
  constructor(
    private weatherService: WeatherService,
    private fb: FormBuilder,
    private customValidation: CustomValidationService
  ) {}

  private prevCity: string;
  private prevUnits: string;
  
  FormStructure = this.fb.group({
    city: ['kyiv', [Validators.required]],
    units: ['metric',[Validators.required, this.customValidation.ValidateUnits],],
  });

  
  addCity() {
    if (this.FormStructure.invalid) {
      this.FormStructure.get('city').markAsTouched();
      this.FormStructure.get('units').markAsTouched();
      return;
    }

    const { city, units } = this.FormStructure.value;

    // if (this.prevCity === city &&     this.prevUnits === units ) {return;}
    this.prevCity = city;
    this.prevUnits = units;
    this.weatherService.addCity(city, units);
  }

  doValidation() {
    const units = this.FormStructure.get('units');
    if (units.touched) {
      if (units.errors?.required) {
        return `This field is required!`;
      } else if (units.errors?.inValid) {
        return units.errors?.inValid;
      } else if (!units.errors) {
        return false;
      }
    }
  }
}
