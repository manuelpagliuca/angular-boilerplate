import { Component } from '@angular/core';
import { TableDataProviderService } from '../services/table-data-provider.service';
import { PizzaData } from '../models/pizza-data';

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.scss'],
  providers: [TableDataProviderService]
})
export class TablePageComponent {
  sourceFiles = ['/table-page/table-page.component.html', '/table-page/table-page.component.ts'];
  displayedColumns = ['id', 'pizza', 'flour', 'sauce', 'toppings', 'stuffed crust'];
  dataSource: PizzaData[];

  constructor(private tableDataProvider: TableDataProviderService) {
    this.dataSource = tableDataProvider.data;
  }
}