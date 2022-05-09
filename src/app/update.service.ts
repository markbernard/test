import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  url: string = "http://www.google.com/";

  constructor() { }
}
