import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-form-groups',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-groups.component.html',
  styleUrl: './form-groups.component.css'
})
export class FormGroupsComponent {

  applicationForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });

  onSubmit() {
    console.log(this.applicationForm);
  }



}
