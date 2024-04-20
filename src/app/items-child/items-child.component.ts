import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-items-child',
  templateUrl: './items-child.component.html',
  styleUrls: ['./items-child.component.css'],
})
export class ItemsChildComponent {
  @Output()
  newItemEvent = new EventEmitter<string>();

  addNewItem(newItemValue: string) {
    this.newItemEvent.emit(newItemValue);
  }
}
