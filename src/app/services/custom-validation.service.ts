import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidationService {

  ValidateUnits: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    if (!['standard', 'metric', 'imperial'].includes(control.value)) {
      return {
        inValid: 'This field must contain one of these values: standard, metric, imperial!'
      }
    }
    console.log(control);
    return null;
  }

  constructor() { }
}
