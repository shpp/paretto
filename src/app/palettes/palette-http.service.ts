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
        return this.http.get('palettes.json')
                    .map((resp:Response) => {
                        let result = resp.json()
                        console.log(result);
                        return result;
                    })
                    .catch((error: any)=> {
                        return Observable.throw(error);
                    });
    }

    createPalette(colors: Array<string>) {

    }

    deletePalette(paletteId: number) {

    }

    updatePalette(paletteId: number) {

    }

}
