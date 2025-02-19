import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  theme = 'light-theme';
  themes = ['light-theme', 'dark-theme'];

  switchTheme() {

    this.theme = this.theme === 'light-theme' ? 'dark-theme' : 'light-theme';
    console.log('Theme switched to: ', this.theme);
  }


}
