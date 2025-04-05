import { Component, inject, OnInit } from '@angular/core';
import { ObjectsService } from './services/objects.service';
import { IObject } from './models/object.model';
import { AgGridModule } from 'ag-grid-angular';



import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import type { ColDef } from 'ag-grid-community';
import { ButtonComponent } from './button/button.component';
import { themeBalham, iconSetMaterial, themeMaterial, themeAlpine, themeQuartz, iconOverrides } from 'ag-grid-community';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AgGridModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  fontAwesomeIcons = iconOverrides({
    type: 'font',
    family: 'Font Awesome 5 Free',
    cssImports: ['https://use.fontawesome.com/releases/v5.6.3/css/all.css'],
    weight: 'bold', // Font Awesome requires bold font weight
    icons: {
      // use font codes documented by Font Awesome e.g. '\u{f062}' == arrow-up
      asc: '\u{f062}',
      desc: '\u{f063}',
    },
  });
  public theme = themeQuartz.withParams({
    spacing: 12,
    accentColor: 'red',
  }).withPart(this.fontAwesomeIcons);


  pagination = true;
  paginationPageSize = 10;
  paginationPageSizeSelector = [10, 20]
  rowData: IObject[] = []
  rowSelection = { type: 'multiple' };

  defaultColDef: ColDef = {
    flex: 1,
    filter: true,
    floatingFilter: true
  }


  colDefs: ColDef[] = [
    {
      field: "button",
      headerName: "Button",
      cellRenderer: ButtonComponent
    },

    {
      field: "id", headerName: "ID",
      checkboxSelection: true


    },
    {
      field: "name", headerName: "Name",
      cellEditor: "agSelectCellEditor",
      cellEditorParams: { values: ['Google', 'Apple'] }
    },
    {
      field: "generation",
      valueGetter: p => p.data?.data?.generation ?? 'No-Data'
    },
    {
      field: "price",
      valueGetter: p => p.data?.price ?? 'No-Data'
    },
    {
      field: "capacity",
      valueGetter: p => p.data?.data?.capacity ?? 'No-Data'
    },
    {
      field: "color",
      valueGetter: p => p.data?.data?.color ?? 'No-Data'
    }
  ];

  objectService = inject(ObjectsService);
  ngOnInit(): void {
    this.objectService.getAllObjects().subscribe((data) => {
      this.rowData = data;
    });
  }



}
