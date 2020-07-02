import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Observable } from 'rxjs/Observable';
import { Album } from './album'


@Injectable()
export class ProductService {

  
  private _albumUrl : string = '../assets/album.json';
  private _response : any;
  constructor(private _http: Http) { }

  getAlbum(id: number) : Observable<Album>{        
    return this._http.get(this._albumUrl)
    .map((response : any) => <Album>response.json());    
  }

}
