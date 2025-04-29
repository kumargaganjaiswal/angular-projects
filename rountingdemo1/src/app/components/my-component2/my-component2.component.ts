import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-my-component2',
  templateUrl: './my-component2.component.html',
  styleUrls: ['./my-component2.component.css'],
  standalone: true,
  imports: [RouterLink]
})
export class MyComponent2Component implements OnInit {

  router = inject(Router);

  constructor() { }

  ngOnInit() {
  }

  queryParam() {
    this.router.navigate(['/component3'], {
      queryParams: { category: 'electronics', sortBy: 'price' }
    });
  }
}
