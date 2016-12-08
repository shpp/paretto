import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PaletteHttpService } from '../palette-http.service';
import { Observable } from 'rxjs/Observable';
import { Response} from '@angular/http';
import { Palette } from '../palette';

@Component({
  selector: 'app-list',
  templateUrl: './palette-list.component.html',
  styleUrls: ['./palette-list.component.scss'],
  providers: [PaletteHttpService]
})

export class PaletteListComponent implements OnInit {
  palettes: Palette[] = [];
  error:any;
  @Output() paletteSelected = new EventEmitter<Palette>();

  constructor(private httpService: PaletteHttpService) { }

  ngOnInit() {
    this.httpService.getPalettes()
            .subscribe(
                data => this.palettes = data,
                error => {this.error = error; console.log(error);}
            );
  }

  onSelected(palette: Palette) {
    this.paletteSelected.emit(palette);
  }
}
