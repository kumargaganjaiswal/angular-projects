import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormControl, ReactiveFormsModule, Validators } from '@angular/forms'
import { delay, of } from 'rxjs';

function userLastNameExistsValidator(): AsyncValidatorFn {
  return (control: AbstractControl) => {
    const userLastNameExists = control.value === 'Sharma';
    return of(userLastNameExists ? { userLastNameTaken: true } : null).pipe(delay(1000));
  }
}
@Component({
  selector: 'app-formcontrols',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './formcontrols.component.html',
  styleUrl: './formcontrols.component.css'
})
export class FormcontrolsComponent {
  firstName = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ]);
  lastName = new FormControl('', [], [userLastNameExistsValidator()]);
  update() {
    this.firstName.setValue('Vivek');
    this.lastName.setValue('Kumar');
  }
}
