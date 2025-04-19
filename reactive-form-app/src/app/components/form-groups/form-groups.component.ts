import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, JsonPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-form-groups',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgIf],
  templateUrl: './form-groups.component.html',
  styleUrl: './form-groups.component.css'
})
export class FormGroupsComponent {

  applicationForm = new FormGroup({
    firstName: new FormControl('', {
      validators: [Validators.required, Validators.minLength(10)]
    }),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });

  get firstNameInvalid() {
    console.log('firstNameInvalid')
    return (this.applicationForm.controls.firstName.touched &&
      this.applicationForm.controls.firstName.dirty &&
      this.applicationForm.controls.firstName.invalid)
  }

  get lastNameInvalid() {
    return (this.applicationForm.controls.lastName.touched &&
      this.applicationForm.controls.lastName.dirty &&
      this.applicationForm.controls.lastName.invalid)
  }

  onSubmit() {
    console.log(this.applicationForm.value);
  }



}
