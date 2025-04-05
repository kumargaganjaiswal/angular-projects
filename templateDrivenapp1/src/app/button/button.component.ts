import { Component } from '@angular/core';

import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  template: `<button class="btn btn-primary" (click)="onClick()" >Click Me!</button>`,
  styleUrl: './button.component.css'
})
export class ButtonComponent implements ICellRendererAngularComp {
  public value!: string;

  agInit(params: ICellRendererParams): void {
    this.value = params.value;
  }
  refresh(params: ICellRendererParams): boolean { return true; }
  onClick() {
    this.value = 'Button Clicked!';
    console.log(this.value);
  }
}
