import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component3',
  templateUrl: './my-component3.component.html',
  styleUrls: ['./my-component3.component.css']
})
export class MyComponent3Component implements OnInit {
  userId = input.required<string>();

  constructor() { }

  ngOnInit() {
    console.log(this.userId());
  }

}
