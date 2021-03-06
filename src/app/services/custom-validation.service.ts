import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidationService {

  ValidateUnits: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    if (!['standard', 'metric', 'imperial'].includes(control.value)) {
      return {
        inValid: 'This field must to contain one of the follows values: standard, metric, imperial!'
      }
    }
    return null;
  }

  constructor() { }
}
