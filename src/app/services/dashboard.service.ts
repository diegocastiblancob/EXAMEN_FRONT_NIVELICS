import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  public url: string;
  constructor(
    public _http: HttpClient
  ) {
    this.url = global.url;
  }

  /**
  * @param {String} metodo serviceNivelics
  * @param {String} mensaje hacer uso del insumo, informacion dek servicio
  * @returns {Array} retorna respuesta del servicio rest
  */
  serviceNivelics(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.get('/test/test.json', { headers: headers });
  }
}
