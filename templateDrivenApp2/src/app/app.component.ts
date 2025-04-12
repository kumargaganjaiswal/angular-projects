import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

type emp = {
  name: string
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild('form') form!: NgForm;



  model: emp = {
    name: ''
  };

  onSubmit(form: NgForm) {
    console.log(form.form.controls["name"].value);
    this.form.reset();
  }

}


