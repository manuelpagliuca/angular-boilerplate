import { Injectable } from '@angular/core';
import { PizzaData } from '../models/pizza-data';

@Injectable({
  providedIn: 'root'
})
export class TableDataProviderService {
  data: Array<PizzaData> = [];

  constructor() {
    this.data = JSON.parse(localStorage.getItem('pizzasData') ?? "[]");
  }
}
