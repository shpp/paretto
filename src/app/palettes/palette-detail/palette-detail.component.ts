import { Component, OnInit, Input } from '@angular/core';
import { Palette } from '../palette';

@Component({
  selector: 'app-palette-detail',
  templateUrl: './palette-detail.component.html',
  styleUrls: ['./palette-detail.component.scss']
})
export class PaletteDetailComponent implements OnInit {
  @Input() selectedPalette: Palette;

  constructor() { }

  ngOnInit() {
  }

}
