import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Response} from '@angular/http';
import {Palette} from './palette';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class PaletteHttpService {

    constructor(private http: Http){ }

    getPalettes() : Observable<Palette[]>{
        return this.http.get('https://paretto-18bb2.firebaseio.com/palettes.json')
                    .map((resp:Response) => {
                        let result = resp.json()
                        console.log(result);
                        return result;
                    })
                    .catch(this.handleError);
    }

    createPalette(colors: Array<string>) {

    }

    deletePalette(paletteId: number) {

    }

    updatePalette(paletteId: number) {

    }

    private handleError (error: any) {
      return Observable.throw(error);
    }

}
