import { AbstractControl, ValidatorFn } from '@angular/forms';

/* 
## USAGE

-- Custom validators for reactive forms. Just call them like Validators.something, pass the function instead.
-- Don't forget to import! Though angular has auto import

## Params not mentioned above

**values**: Array of values
**text**: Text to be searched for
*/

// Check if the value is of type date
export function dateValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const date = new Date(control.value);
    if (isNaN(date.getTime())) {
      // Invalid date format
      return { 'invalidDate': true };
    }
    // const today = new Date();
    // if (date <= today) {
    //   // Date is not in the past
    //   return { 'notPastDate': true };
    // }
    return null;
  };
}

// Check if the value is within the values in the array
export function inArrayValidator(values: any[]): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
      const value = control.value;
      if (values.includes(value)) return null; 
      return { 'notInArray': { value } }; // Validation error object
  };
}

// Check if the value starts with the provided text
export function isPhoneNumber(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;

    // Check if the value is a string and starts with '09' and is composed of digits only
    if (typeof value === 'string' && value.startsWith('09') && /^\d+$/.test(value)) {
      return null; // Valid phone number
    }

    // Return validation error
    return { 'requiredFormat': 'phone number', 'value': value };
  };
}