import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Geometry, Units } from '../models';
import { environment as env } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  getGeometries(): Observable<Array<Geometry>>{
      return this.http.get<Array<Geometry>>(`${env.BASE_URL}/geometries`);
  }
  getUnits(): Observable<Array<Units>>{
    return this.http.get<Array<Units>>(`${env.BASE_URL}/units`)
  }
}
