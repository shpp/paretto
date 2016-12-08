export class Palette {
  paletteId: number;
  paletteColors: Array<string>;
  constructor (id:number, colors:Array<string>){
    this.paletteId = id;
    this.paletteColors = colors;
  }
}
