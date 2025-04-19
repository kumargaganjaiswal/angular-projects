import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'

@Component({
  selector: 'app-formgroup-student-from',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formgroup-student-from.component.html',
  styleUrl: './formgroup-student-from.component.css'
})
export class FormgroupStudentFromComponent {
  private fb = inject(FormBuilder);

  registration = this.fb.group({
    studentName: ['', [Validators.required]],
    age: ['', [Validators.required]],
    studentContact: [''],
    adresss: this.fb.group({
      addressStreet: [''],
      addressLocation: [''],
      addressCity: [''],
      addressState: [''],
      addressZip: ['']
    })
  });

  onSubmit() {
    console.log(this.registration.invalid);
  }
}
