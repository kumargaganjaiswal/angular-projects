import { Component, inject, OnInit } from '@angular/core';
import { ObjectsService } from './services/objects.service';
import { IObject } from './models/object.model';
import { AgGridModule } from 'ag-grid-angular';

import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import type { ColDef } from 'ag-grid-community';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AgGridModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  rowData = [
    { name: 'John', age: 25, city: 'New York' },
    { name: 'Jane', age: 30, city: 'London' },
    { name: 'Jack', age: 35, city: 'Paris' }
  ];

  colDefs = [
    { field: 'name', headerName: 'Name' },
    { field: 'age', headerName: 'Age' },
    { field: 'city', headerName: 'City' }
  ];
  /* rowData: IObject[] = [
     {
       id: "1",
       name: "Object 1",
       data: {
         generation: "Gen 1",
         price: "100",
         capacity: "1TB",
         color: "Red"
       },
       createdAt: new Date("2023-01-01")
     },
     {
       id: "2",
       name: "Object 2",
       data: {
         generation: "Gen 2",
         price: "200",
         capacity: "2TB",
         color: "Blue"
       },
       createdAt: new Date("2023-02-01")
     }
   ];
   colDefs: ColDef[] = [
     { field: "id", headerName: "ID" },
     { field: "name", headerName: "Name" },
     { field: "createdAt", headerName: "Created At" },
   ];
  
  objectService = inject(ObjectsService);
  ngOnInit(): void {
    this.objectService.getAllObjects().subscribe((data) => {
      this.rowData = data;
      console.log(this.rowData);
    });
  }
  */

}
