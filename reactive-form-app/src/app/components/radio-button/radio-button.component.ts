import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { addressType, options } from '../schema/schema.model';



@Component({
  selector: 'app-radio-button',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './radio-button.component.html',
  styleUrl: './radio-button.component.css'
})
export class RadioButtonComponent {
  skillsGroup: FormGroup;
  simpleSkillGroup: FormGroup;
  skillsData: string[] = ['Angular', 'React', 'Vue', 'Svelte'];
  contactOptions = options;
  addressTypes = addressType;

  fb = inject(FormBuilder);



  constructor() {
    this.skillsGroup = this.fb.group({
      skills: this.fb.array(this.skillsData.map(() => new FormControl(false)))
    });

    this.simpleSkillGroup = this.fb.group({
      selectedSkills: this.fb.array([])
    });

  }

  onCheckboxChange(e: any) {
    console.log(e.target.value);
    const selectedSkills = this.simpleSkillGroup.get('selectedSkills') as FormArray;

    if (e.target.checked) {
      selectedSkills.push(this.fb.control(e.target.value));
    } else {
      const index = selectedSkills.controls.findIndex(x => x.value === e.target.value);
      selectedSkills.removeAt(index);
    }
  }


  get skillsFormArray(): FormArray {
    return this.skillsGroup.get('skills') as FormArray;
  }



  contacts = this.fb.group({
    contact: ''
  });



  addresses = this.fb.group({
    address: ''
  })

  onSubmit() {
    console.log(this.contacts.controls.contact.value);
  }
  onSubmitAddress() {
    console.log(this.addresses.controls.address.value);
  }

  onSubmitCheckBox() {

    const selectedSkills = this.skillsData
      .filter((_, i) => this.skillsFormArray.at(i).value);
    console.log('Selected skills:', selectedSkills);

  }

  onSubmitCheckBox1() {
    console.log(this.simpleSkillGroup.value.selectedSkills);
  }




}
