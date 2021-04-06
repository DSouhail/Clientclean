import { Component, OnInit } from '@angular/core';
import { dataSource } from '../../models/dataSource.model';
@Component({
  selector: 'app-holder',
  templateUrl: './holder.component.html',
  styleUrls: ['./holder.component.scss'],
})
export class HolderComponent implements OnInit {
  message: string = 'ATM journal';
  dataSources: dataSource[] = [
    new dataSource(
      'ATM journal',
      'Collection of transactions',
      '../../../assets/images/logo.png'
    ),
    new dataSource(
      'Visa settlement',
      'Debits & credits summaries',
      '../../../assets/images/logo.png'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}

  receiveMessage($event) {
    this.message = $event;
  }
}
