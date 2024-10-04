import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../item.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent {
  @Input() items: Item[] = [];
  @Output() removeItemEvent = new EventEmitter<Item>();

  toggleBought(item: Item){
    item.isBought = !item.isBought
  }

  removeItem(item: Item){
    this.removeItemEvent.emit(item);
  }
}
