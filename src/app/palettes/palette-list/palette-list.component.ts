import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Palette } from '../palette';

@Component({
  selector: 'app-list',
  templateUrl: './palette-list.component.html',
  styleUrls: ['./palette-list.component.scss']
})
export class PaletteListComponent implements OnInit {
  palettes: Palette[] = [];
  @Output() paletteSelected = new EventEmitter<Palette>();
  palette = new Palette(13,['red','blue','yellow','green']);

  constructor() { }

  ngOnInit() {
  }

  onSelected(palette: Palette) {
    this.paletteSelected.emit(palette);
  }
}
