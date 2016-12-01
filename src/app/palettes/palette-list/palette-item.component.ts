import { Component, OnInit, Input } from '@angular/core';
import { Palette } from '../palette';
@Component({
  selector: 'app-palette-item',
  templateUrl: './palette-item.component.html',
  styleUrls: ['./palette-item.component.scss']
})
export class PaletteItemComponent implements OnInit {
  @Input() palette: Palette;
  paletteId: number;

  constructor() { }

  ngOnInit() {
  }

}
