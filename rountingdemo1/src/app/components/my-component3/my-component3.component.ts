import { Component, inject, input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-component3',
  templateUrl: './my-component3.component.html',
  styleUrls: ['./my-component3.component.css']
})
export class MyComponent3Component implements OnInit {
  userId = input.required<string>();
  router = inject(Router);
  constructor() { }

  ngOnInit() {
    console.log(this.userId());
  }
  onBack() {
    this.router.navigate(['/component2'], {
      replaceUrl: true
    });
  }

}
