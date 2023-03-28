import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-selectable-list',
  templateUrl: './selectable-list.component.html',
  styleUrls: ['./selectable-list.component.css']
})
export class SelectableListComponent {
  @Input()
  items: string[] = [];

  @Output()
  select = new EventEmitter<number>();
}
