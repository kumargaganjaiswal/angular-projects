import { inject, Injectable } from '@angular/core';
import { IObject } from '../models/object.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ObjectsService {
  url = "https://api.restful-api.dev/";
  http = inject(HttpClient);
  constructor() { }

  getAllObjects() {
    return this.http.get<IObject[]>(this.url + "/objects");
  }
}
