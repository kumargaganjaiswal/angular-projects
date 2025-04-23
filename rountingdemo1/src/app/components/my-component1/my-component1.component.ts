import { Component, inject, input, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-my-component1',
  templateUrl: './my-component1.component.html',
  styleUrls: ['./my-component1.component.css'],
  imports: [RouterOutlet],
  standalone: true
})
export class MyComponent1Component implements OnInit {
  userId = input.required<string>();

  avtivatedRoute = inject(ActivatedRoute);
  constructor() { }

  ngOnInit() {
    // // console.log(this.userId());
    this.avtivatedRoute.paramMap.subscribe({
      next: (paramMap) =>
        console.log(paramMap.get('userId'))
    })
    // console.log(this.avtivatedRoute)

  }

}
