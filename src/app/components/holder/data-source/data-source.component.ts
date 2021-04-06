import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-source',
  templateUrl: './data-source.component.html',
  styleUrls: ['./data-source.component.scss'],
})
export class DataSourceComponent implements OnInit {
  @Input() datasource: { name: string; description: string; imagePath: string };
  message: string = 'Hola mundo';
  @Output() messageEvent = new EventEmitter<string>();
  select: string = 'not selected yet';
  searchText: string = '';

  constructor() {}

  ngOnInit(): void {}
  onSelect() {
    this.select = 'selected';
  }
  sendMessage() {
    this.messageEvent.emit(this.datasource.name);
  }
}
