import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class ProductService {

  
  private _albumUrl : string = '../assets/album.json';
  private _response : any;
  constructor(private _http: Http) { }

  getAlbum(id : number):Observable<any>{        
    return this._http.get(this._albumUrl)
    .map((response : any) => response.json());    
  }

}
