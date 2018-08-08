import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Position} from '../Position';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  constructor(private http:HttpClient) { }

  public getPositions(): Observable<Position[]>{
    return this.http.get<Position[]>("https://secure-ocean-44491.herokuapp.com/positions");
  }

}
