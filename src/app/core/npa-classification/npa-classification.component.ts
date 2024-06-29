import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  details?: DetailElement[];  // Nested table data
}

export interface DetailElement {
  property: string;
  value: string;
}
@Component({
  selector: 'app-npa-classification',
  templateUrl: './npa-classification.component.html',
  styleUrls: ['./npa-classification.component.css'],
})

export class NpaClassificationComponent {
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  innerDisplayedColumns: string[] = ['property', 'value'];
  expandedElement: PeriodicElement | null =null;

  toggleRow(element: PeriodicElement) {
    this.expandedElement = this.expandedElement === element ? null : element;
  }

  isExpansionDetailRow = (index: number, row: PeriodicElement) => row.hasOwnProperty('details');

}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Hydrogen',
    weight: 1.0079,
    symbol: 'H',
    details: [
      { property: 'Atomic number', value: '1' },
      { property: 'Atomic weight', value: '1.0079' }
    ]
  },
  {
    position: 2,
    name: 'Helium',
    weight: 4.0026,
    symbol: 'He',
    details: [
      { property: 'Atomic number', value: '2' },
      { property: 'Atomic weight', value: '4.0026' }
    ]
  },
  // More data here...
];