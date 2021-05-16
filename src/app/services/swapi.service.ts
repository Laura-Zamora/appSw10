import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  readonly SWAPIURL = environment.swapiUrl
  constructor(private http20:HttpClient) { }
  getswapi(path){
    return this.http20.get(`${this.SWAPIURL}${path}`);
  }
}
