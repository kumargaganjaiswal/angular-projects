import { DatePipe, DecimalPipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemperaturePipe } from './temperature.pipe';
import { SortPipe } from './sort.pipe';
import { CustomUppercasePipe } from './customUppercase .pipe';
import { FilterPipe } from './filter.pipe';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DatePipe, DecimalPipe,
    TemperaturePipe,
    SortPipe, CustomUppercasePipe,
    FilterPipe, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  currentDateTime = new Date();
  temperature = 100;
  unSortedarray = [1, 5, 3, 2, 4];
  users = [
    {
      "id": 1,
      "name": "Alice Johnson",
      "role": "admin",
      "email": "alice.johnson@example.com"
    },
    {
      "id": 2,
      "name": "Bob Smith",
      "role": "user",
      "email": "bob.smith@example.com"
    },
    {
      "id": 3,
      "name": "Carol Williams",
      "role": "user",
      "email": "carol.williams@example.com"
    },
    {
      "id": 4,
      "name": "David Brown",
      "role": "admin",
      "email": "david.brown@example.com"
    },
    {
      "id": 5,
      "name": "Eve Davis",
      "role": "user",
      "email": "eve.davis@example.com"
    }
  ];

}
