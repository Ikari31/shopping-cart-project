import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../item.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-list-groups',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-groups.component.html',
  styleUrl: './item-groups.component.css'
})
export class ItemGroupsComponent {
  @Input() items!: Item[];  
  @Output() toggleBoughtEvent = new EventEmitter<Item>();  

  
  toggleBought(item: Item) {
    item.isBought = !item.isBought;  
    this.toggleBoughtEvent.emit(item);  
  }

  
  getUnboughtItems(): Item[] {
    return this.items.filter(item => !item.isBought);
  }

  
  getBoughtItems(): Item[] {
    return this.items.filter(item => item.isBought);
  }
}
