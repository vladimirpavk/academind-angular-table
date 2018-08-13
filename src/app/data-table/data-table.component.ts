import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatAccordionDisplayMode } from '@angular/material';
import { DataTableDataSource } from './data-table-datasource';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: DataTableDataSource;

  public selectedRow=null;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new DataTableDataSource(this.paginator, this.sort);
  }

  public selectRow(row:any):void{  
    this.selectedRow=row;
    console.log(this.selectedRow);
  }

  public leavedRow(row:any):void{
    console.log(row);
  }
}
