import { Component, OnInit } from '@angular/core';
import { Palette } from './palettes/palette';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedPalette: Palette;

  construnctor() {}

  ngOnInit() {

  }
}
